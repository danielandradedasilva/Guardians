import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';

import { AuthService } from 'src/app/core/services/auth.service';
import { AuthProvider } from 'src/app/core/services/auth.types';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;
  authProviders = AuthProvider;
  configs = {
    isSignIn: true,
    action: 'Entrar',
    actionChange: 'Criar uma conta !'
  };
  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private authService: AuthService,
              private navCtrl: NavController,
              private menuController: MenuController,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private overlayService: OverlayService) { }

    /* configuração de validação */
  ngOnInit(): void {
    this.createForm();
  }
  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get name(): FormControl {
    return this.authForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.authForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.authForm.get('password') as FormControl;
  }

    /*Configurações dos botoes entrar,criar uma conta e já tenho uma conta */
  changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn} = this.configs;
    this.configs.action = isSignIn ? 'Entrar' : 'Criar uma conta !';
    this.configs.actionChange = isSignIn ? 'Criar uma conta !' : 'Já tenho uma conta !';
    !isSignIn
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }

     /*Autenticação dos dados de login */
   async onSubmit(provider: AuthProvider): Promise<void> {
     const loading = await this.overlayService.loading();
     try {
      const credentials = await this.authService.authenticate({
        isSignIn: this.configs.isSignIn,
        user: this.authForm.value,
        provider
      });
      /* metodo para navegar para pagiana menu-cadastro, se o usuário efetuar o login co sucesso*/
      this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/home');
      /* fim */
    } catch (e) {
      await this.overlayService.toast();
    } finally {
      loading.dismiss();
    }
  }

  ionViewDidEnter() {
   this.menuController.enable(false);
  }

  ionViewWillLeave() {
   this.menuController.enable(true);
  }
}
