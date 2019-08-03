import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.page.html',
  styleUrls: ['./financeiro.page.scss'],
})
export class FinanceiroPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  proximo(nomeDaPagina: string) {
    this.navCtrl.navigateForward(nomeDaPagina);
  }

  voltar(paraPagina) {
    this.navCtrl.navigateBack(paraPagina);
  }

}
