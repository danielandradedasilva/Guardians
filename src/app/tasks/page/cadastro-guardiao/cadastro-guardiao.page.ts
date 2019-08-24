import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-guardiao',
  templateUrl: './cadastro-guardiao.page.html',
  styleUrls: ['./cadastro-guardiao.page.scss'],
})
export class CadastroGuardiaoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  proximo() {
    this.navCtrl.navigateForward('cadastro-guardiao2');
  }

}
