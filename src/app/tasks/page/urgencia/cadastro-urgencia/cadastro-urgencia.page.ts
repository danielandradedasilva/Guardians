import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-urgencia',
  templateUrl: './cadastro-urgencia.page.html',
  styleUrls: ['./cadastro-urgencia.page.scss'],
})
export class CadastroUrgenciaPage implements OnInit {

  constructor(private navCtrl: NavController) { }
   
  ngOnInit() {
  }
  navegar( page ){
    
    this.navCtrl.navigateForward( page );
   

  }
  
}
