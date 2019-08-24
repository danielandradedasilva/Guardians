import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-pagador3',
  templateUrl: './cadastro-pagador3.page.html',
  styleUrls: ['./cadastro-pagador3.page.scss'],
})
export class CadastroPagador3Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  proximo() {
    this.navCtrl.navigateForward('cadastro-pagador4');
  }
}
