import { OverlayService } from 'src/app/core/services/overlay.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listAngulaFire: AngularFireList<any>; 
  data: Observable<any[]>;
  cardsValues = false;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private firebaseDB: AngularFireDatabase
  ) { }

  ngOnInit()
  {
    this.GetValuesCard();
  }

  GetValuesCard()
  {
    this.listAngulaFire = this.firebaseDB.list('/valuesCardFeed', values => values.orderByChild('description'));
    this.listAngulaFire.valueChanges().subscribe(resultValue =>
    {
      this.GiveValuesForCard(resultValue);
    });
  }

  GiveValuesForCard(data)
  {
    this.cardsValues = data;
    console.log('CardsValues:', this.cardsValues);
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

  proximo(nomeDaPagina: string) {
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
