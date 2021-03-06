import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-cadastro-urgencia',
  templateUrl: './cadastro-urgencia.page.html',
  styleUrls: ['./cadastro-urgencia.page.scss'],
})
export class CadastroUrgenciaPage implements OnInit 
{
  listAngularFire: AngularFireList<any>;

  typeUrgency = 
  [
    { value: 0, name: "Selecione" },
    { value: 1, name: "Doutor(a) da criança" },
    { value: 2, name: "Hospital" },
    { value: 3, name: "Odontológico" },
    { value: 4, name: "Remedios" },
  ];

  values =  
  {
    indexType: 0,
    telR: "",
    telC: ""
  }

  constructor(
    private navCtrl: NavController, 
    private firebaseDB: AngularFireDatabase, 
    private toastCtr: ToastController,
    private angularFireAuth: AngularFireAuth
  ) { }

  ngOnInit()
  {
  }


  async addUrgency()
  {
    let user = this.angularFireAuth;
    this.listAngularFire = this.firebaseDB.list('/contatoUrgencias');

    if(user.auth.currentUser == null)
    {
      let toast = await this.toastCtr.create(
      {
        message: "Voçê não tem Permissão para fazer este tipo de ação, por favor se logue para poder obter",
        duration: 5000
      });
      toast.present();  
    }
    else 
    {
      if(this.checkOut())
      {
        this.listAngularFire.push(
        {
          idUser: user.auth.currentUser.uid,
          telefoneRecidencial: this.values.telR ,
          telCelular: this.values.telC,
          indexType: this.values.indexType
        });
        this.AlertSucess();
      }
    }
  
  }

  checkOut()
  {
    let errors = [];

    if(this.values.indexType == this.typeUrgency[0].value)
    {
      errors.push("Por favor, selecione um tipo de urgência");
    }

    if(errors.length > 0)
    {
      this.AlertErrors(errors);
      return false
    }
    else
    {
      return true;
    }
    
  }

  async AlertSucess()
  {  
    let toast = await this.toastCtr.create(
    {
      message: "Contato Adicionado com sucesso",
      duration: 5000
    });
    toast.present();
  }

  async AlertErrors(errors)
  {  
    let toast = await this.toastCtr.create(
    {
      message: errors[0],
      duration: 5000
    });

    toast.present();
  }


  proximo(nomeDaPagina: string)
  {
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
