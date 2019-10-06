import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';
import { OverlayService } from 'src/app/core/services/overlay.service';


@Component({
  selector: 'app-botao-logout',
  template: `
  <ion-buttons>
    <ion-button (click)="logout()" >
      Sair
    </ion-button>
  </ion-buttons>
  `,
})
export class BotaoLogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private overlayService: OverlayService
  ) { }

  ngOnInit() {}

  async logout(): Promise<void> {
    await this.overlayService.alert({
      message: 'Deseja realmente sair?',
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
