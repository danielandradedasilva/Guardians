import { AgendaPageModule } from './../../agenda/agenda.module';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contatos-urgencia',
  templateUrl: './contatos-urgencia.page.html',
  styleUrls: ['./contatos-urgencia.page.scss'],
})
export class ContatosUrgenciaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  proximo(nomeDaPagina: string) {
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
