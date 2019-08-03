import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthProvider } from 'src/app/core/services/auth.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;
  authProviders = AuthProvider;
  configs = {
    isSingnIn: true,
    action: 'Entrar',
    actionChange: 'Criar uma conta !'
  };
  private nameControl = new FormControl('', [Validators.required, Validators.minLength(6)])

  constructor(private authService: AuthService,  private navCtrl: NavController, private fb: FormBuilder) { }

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
    return <FormControl> this.authForm.get('name');
  }

  get email(): FormControl {
    return <FormControl> this.authForm.get('email');
  }

  get password(): FormControl {
    return <FormControl> this.authForm.get('password');
  }

    /*Configurações dos botoes entrar,criar uma conta e já tenho uma conta */
  changeAuthAction(): void {
    this.configs.isSingnIn = !this.configs.isSingnIn;
    const { isSingnIn} = this.configs;
    this.configs.action = isSingnIn ? 'Entrar' : 'Criar uma conta !';
    this.configs.actionChange = isSingnIn ? 'Criar uma conta !' : 'Já tenho uma conta !';
    !isSingnIn
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }

     /*Autenticação dos dados de login */
   async onSubmit(provider: AuthProvider): Promise<void> {
    try {
      const credentials = await this.authService.authenticate({
        isSignIn: this.configs.isSingnIn,
        user: this.authForm.value,
        provider
      });
      console.log('Usuário Autenticado', credentials);
      console.log('Redirecionado...');
    } catch (e) {
      console.log('Erro: ', e);
    }
  }

    /* Envento do botão entrar, 'leva para outra página'*/
  irPara(nomeDaPagina: string) {
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
