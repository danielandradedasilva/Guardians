import { OverlayService } from 'src/app/core/services/overlay.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { async } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private overlayService: OverlayService) {}

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

  proximo(nomeDaPagina: string) {
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
