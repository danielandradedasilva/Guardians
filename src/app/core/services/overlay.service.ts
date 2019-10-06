import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlertOptions, LoadingOptions } from '@ionic/core';


@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
    ) { }

    async alert(options?: AlertOptions): Promise<HTMLIonAlertElement> {
      const alert = await this.alertCtrl.create(options);
      await alert.present();
      return alert;
    }

    async loading(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
      const loading = await this.loadingCtrl.create({
        message: 'Aguarde...',
        ...options
      });
      await loading.present();
      return loading;
    }

    async toast(options?: ToastController): Promise<HTMLIonToastElement> {
      const toast = await this.toastCtrl.create({
        position: 'bottom',
        duration: 3000,
        message: ' Email ou senha incorreto! ',
        showCloseButton: true,
        closeButtonText: 'OK',
        ...options
      });
      await toast.present();
      return toast;
    }
}
