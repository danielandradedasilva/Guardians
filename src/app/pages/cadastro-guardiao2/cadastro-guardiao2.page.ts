import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-guardiao2',
  templateUrl: './cadastro-guardiao2.page.html',
  styleUrls: ['./cadastro-guardiao2.page.scss'],
})
export class CadastroGuardiao2Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  proximo() {
    this.navCtrl.navigateForward('cadastro-guardiao3');
  }

}
