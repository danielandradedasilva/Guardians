import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-guardiao4',
  templateUrl: './cadastro-guardiao4.page.html',
  styleUrls: ['./cadastro-guardiao4.page.scss'],
})
export class CadastroGuardiao4Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  proximo() {
    this.navCtrl.navigateForward('home');
  }

}
