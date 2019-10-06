import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';
import { GenitorPagador } from 'src/app/interface/genitorPagador';
import { GenitorPagadorService } from 'src/app/service/genitorPagador.service';

@Component({
  selector: 'app-cadastrar-pagador',
  templateUrl: './cadastrar-pagador.page.html',
  styleUrls: ['./cadastrar-pagador.page.scss'],
})
export class CadastrarPagadorPage implements OnInit {
  private genitorPagadorId: string = null;
  public GenitorPagador: GenitorPagador  = {};
  private loading: any;
  private genitorPagadorSubscription: Subscription;

  constructor(
    private genitorPagadorService: GenitorPagadorService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController
  ) {
    this.genitorPagadorId = this.activatedRoute.snapshot.params['id'];

    if (this.genitorPagadorId) { this.loadGuardiao(); }
  }

  ngOnInit() {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    if (this.genitorPagadorSubscription) { this.genitorPagadorSubscription.unsubscribe(); }
  }

  loadGuardiao() {
    this.genitorPagadorSubscription = this.genitorPagadorService.getGenitorPagador(this.genitorPagadorId).subscribe(data => {
      this.GenitorPagador = data;
    });
  }

  async saveGenitorPagador() {
    await this.presentLoading();

    this.GenitorPagador.userId = this.authService.getAuth().currentUser.uid;

    if (this.genitorPagadorId) {
      try {
        await this.genitorPagadorService.updateGenitorPagador(this.genitorPagadorId, this.GenitorPagador);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/home');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } else {
      this.GenitorPagador.createdAt = new Date().getTime();

      try {
        await this.genitorPagadorService.addGenitorPagador(this.GenitorPagador);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/home');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}

