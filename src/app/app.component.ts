import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
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
      icon: 'home'
    },
    {
      title: 'Menu Cadastro',
      url: '/menu-cadastro',
      icon: 'keypad'
    },
    {
      title: 'Urgencia',
      url: '/contatos-urgencia',
      icon: 'ios-call'
    },
    {
      title: 'Configurações',
      url: '/configuracoes',
      icon: 'construct'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
