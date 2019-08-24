import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu-cadastro',
  templateUrl: './menu-cadastro.page.html',
  styleUrls: ['./menu-cadastro.page.scss'],
})
export class MenuCadastroPage implements OnInit {

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  irPara(NomeDaPagina: string) {
    this.navCtrl.navigateForward(NomeDaPagina);
  }

  async  alert() {
    const alertCadastro = await this.alertCtrl.create({
      header: 'Qual opção escolher?',
      message: 'Se você tem a guarda da criança, escolha a opção Guardião. Se você paga a pensão, então escolha a opção G.Pagador.',
      buttons: ['Fechar']
    });

    await alertCadastro.present();
  }

}
