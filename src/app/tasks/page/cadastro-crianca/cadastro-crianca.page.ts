import { Crianca } from './../../../interface/crianca';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';
import { CriancaService } from 'src/app/service/crianca.service';

@Component({
  selector: 'app-cadastro-crianca',
  templateUrl: './cadastro-crianca.page.html',
  styleUrls: ['./cadastro-crianca.page.scss'],
})
export class CadastroCriancaPage implements OnInit {
  private criancaId: string = null;
  public crianca: Crianca = {};
  private loading: any;
  private criancaSubscription: Subscription;

  constructor(
    private criancaService: CriancaService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController
  ) {
    this.criancaId = this.activatedRoute.snapshot.params['id'];

    if (this.criancaId) { this.loadCrianca(); }
  }

  ngOnInit() { }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    if (this.criancaSubscription) { this.criancaSubscription.unsubscribe(); }
  }

  loadCrianca() {
    this.criancaSubscription = this.criancaService.getCrianca(this.criancaId).subscribe(data => {
      this.crianca = data;
    });
  }

  async saveCrianca() 
  {
    if(this.CheckOut())
    {
      await this.presentLoading();
      this.crianca.userId = this.authService.getAuth().currentUser.uid;

      if (this.criancaId) 
      {
        
        try 
        {
          await this.criancaService.updateCrianca(this.criancaId, this.crianca);
          await this.loading.dismiss();

          this.navCtrl.navigateBack('/home');
        } 
        catch (error) 
        {
          this.presentToast('Erro ao tentar salvar');
          this.loading.dismiss();
        }

      } 
      else 
      {

        this.crianca.createdAt = new Date().getTime();
        try 
        {
          await this.criancaService.addCrianca(this.crianca);
          await this.loading.dismiss();

          this.navCtrl.navigateBack('/home');
        } 
        catch (error) 
        {
          this.presentToast('Erro ao tentar salvar');
          this.loading.dismiss();
        }

      }
    }
    
  }

  async AlertErrors(errors)
  {
    let toast = await this.toastCtrl.create(
    {
      message: errors[0],
      duration: 5000
    });
    toast.present();
  }

  CheckOut()
  {
    let errors = [];
    
    if(this.crianca.nome == undefined)
    {
      errors.push("Por favor, insira um nome (Campo Obrigatorio)");
    }

    if(this.crianca.rg == undefined)
    {
      errors.push("Por favor, insira o RG da criança (Campo Obrigatorio)");
    }

    if(this.crianca.cpf == undefined)
    {
      errors.push("Por favor, insira o CPF da criança (Campo Obrigatorio)");
    }

    if(this.crianca.dataDeNascimento == undefined)
    {
      errors.push("Por favor, insira a data de nascimento da criança (Campo Obrigatorio)")
    }

    if(this.crianca.restricaoAlimentar == undefined)
    {
      errors.push("Por favor, insira se ele(a) possui alguma restrinção alimentar (Campo Obrigatorio)")
    }
    
    if(errors.length > 0)
    {
      this.AlertErrors(errors);
      return false
    }
    else
    {
      return true
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
