import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-pagador2',
  templateUrl: './cadastro-pagador2.page.html',
  styleUrls: ['./cadastro-pagador2.page.scss'],
})
export class CadastroPagador2Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  proximo() {
    this.navCtrl.navigateForward('cadastro-pagador3');
  }
}
