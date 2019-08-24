import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-guardiao3',
  templateUrl: './cadastro-guardiao3.page.html',
  styleUrls: ['./cadastro-guardiao3.page.scss'],
})
export class CadastroGuardiao3Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  proximo() {
    this.navCtrl.navigateForward('cadastro-guardiao4');
  }

}
