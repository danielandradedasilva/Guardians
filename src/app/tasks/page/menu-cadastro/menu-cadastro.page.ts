import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, MenuController } from '@ionic/angular';

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
      subHeader: '',
      // tslint:disable-next-line: max-line-length
      // tslint:disable-next-line: max-line-length
      message: '*Se você tem a guarda da criança, escolha a opção Guardião.<br><br>*Se você paga a pensão, então escolha a opção G.Pagador.<br><br>*Após fazer seu cadastro,<br> clique em adicionar filho, para cadastrar a criança',
      buttons: ['Fechar']
    });

    await alertCadastro.present();
  }

}
