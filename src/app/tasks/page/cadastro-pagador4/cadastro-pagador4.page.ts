import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-pagador4',
  templateUrl: './cadastro-pagador4.page.html',
  styleUrls: ['./cadastro-pagador4.page.scss'],
})
export class CadastroPagador4Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  proximo() {
    this.navCtrl.navigateForward('home');
  }

}
