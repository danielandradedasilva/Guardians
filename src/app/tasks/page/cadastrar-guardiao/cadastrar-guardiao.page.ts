import { Guardiao } from './../../../interface/guardiao';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';
import { GuardiaoService } from 'src/app/service/guardiao.service';


@Component({
  selector: 'app-cadastrar-guardiao',
  templateUrl: './cadastrar-guardiao.page.html',
  styleUrls: ['./cadastrar-guardiao.page.scss'],
})
export class CadastrarGuardiaoPage implements OnInit {
  private guardiaoId: string = null;
  public guardiao: Guardiao = {};
  private loading: any;
  private guardiaoSubscription: Subscription;

  constructor(
    private guardiaoService: GuardiaoService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController
  ) 
  {
    this.guardiaoId = this.activatedRoute.snapshot.params['id'];

    if (this.guardiaoId) { this.loadGuardiao(); }
  }

  ngOnInit() { }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    if (this.guardiaoSubscription) { this.guardiaoSubscription.unsubscribe(); }
  }

  loadGuardiao() {
    this.guardiaoSubscription = this.guardiaoService.getGuardiao(this.guardiaoId).subscribe(data => {
      this.guardiao = data;
    });
  }

  async saveGuardiao()
  {
    
    if(this.CheckOut())
    {
      await this.presentLoading();
      this.guardiao.userId = this.authService.getAuth().currentUser.uid;

      if (this.guardiaoId) 
      {
        try 
        {
          await this.guardiaoService.updateGuardiao(this.guardiaoId, this.guardiao);
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
        this.guardiao.createdAt = new Date().getTime();

        try 
        {
          await this.guardiaoService.addGuardiao(this.guardiao);
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

  async presentLoading() 
  {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) 
  {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
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
    
    if(this.guardiao.nome == undefined)
    {
      errors.push("Por favor, insira um nome (Campo Obrigatorio)");
    }

    if(this.guardiao.cpf == undefined)
    {
      errors.push("Por favor, insira o seu CPF (Campo Obrigatorio)")
    }

    if(this.guardiao.email == undefined)
    {
      errors.push("Por favor, insira o seu E-mail (Campo Obrigatorio)")
    }

    if(this.guardiao.dataDeNascimento == undefined)
    {
      errors.push("Por favor, insira sua data de nascimento (Campo Obrigatorio)")
    }

    if(this.guardiao.dataDeNascimento == undefined)
    {
      errors.push("Por favor, insira sua data de nascimento (Campo Obrigatorio)")
    }

    if(this.guardiao.trabalha == undefined)
    {
      errors.push("Por favor, insira se o senhor(a) trabalha (Campo Obrigatorio)")
    }

    if(this.guardiao.renda == undefined)
    {
      errors.push("Por favor, insira sua renda mensal (Campo Obrigatorio)")
    }

    if(this.guardiao.email == undefined)
    {
      errors.push("Por favor, insira o seu E-mail (Campo Obrigatorio)")
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
}
