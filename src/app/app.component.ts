import { AuthService } from './core/services/auth.service';
import { OverlayService } from './core/services/overlay.service';
import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  paginas: any[] = [
    {
      title: 'Home',
      url: '/home',
      icon: 'ios-home'
    },
    {
      title: 'Cadastro Guardião',
      url: '/cadastrar-guardiao',
      icon: 'ios-person'
    },
    {
      title: 'Cadastro Genitor Pagador',
      url: '/cadastrar-pagador',
      icon: 'ios-person'
    },
    {
      title: 'Adicionar Filho',
      url: '/cadastro-crianca',
      icon: 'ios-person-add'
    },
    {
      title: 'Urgencia',
      url: '/contatos-urgencia',
      icon: 'ios-call'
    },
    {
      title: 'Configurações',
      url: '/configuracoes',
      icon: 'ios-construct'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private overlayService: OverlayService,
    private authService: AuthService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async logout(): Promise<void> {
    await this.overlayService.alert({
      message: 'Você deseja realmente sair?',
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.authService.logout();
            this.navCtrl.navigateRoot('/login');
          }
        },
        'Não'
      ]
    });
  }
}
