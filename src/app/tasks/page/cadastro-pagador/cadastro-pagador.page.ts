import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-pagador',
  templateUrl: './cadastro-pagador.page.html',
  styleUrls: ['./cadastro-pagador.page.scss'],
})
export class CadastroPagadorPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  proximo() {
    this.navCtrl.navigateForward('cadastro-pagador2');
  }

}
