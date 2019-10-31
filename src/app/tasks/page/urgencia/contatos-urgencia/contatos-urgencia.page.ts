import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-contatos-urgencia',
  templateUrl: './contatos-urgencia.page.html',
  styleUrls: ['./contatos-urgencia.page.scss'],
})
export class ContatosUrgenciaPage implements OnInit 
{
  data: Observable<any[]>;
  listAngulaFire: AngularFireList<any>; 
  values = [];

  typeUrgency = 
  [
    { value: 0, name: "Selecione" },
    { value: 1, name: "Doutor(a) da criança" },
    { value: 2, name: "Hospital" },
    { value: 3, name: "Odontológico" },
    { value: 4, name: "Remedios" },
    { value: 5, name: "Outros" }
  ];

  constructor(private navCtrl: NavController, private firebaseDB: AngularFireDatabase) { }

  ngOnInit()
  {
    this.GetValuesInBD();
  }

  GetValuesInBD()
  {
    this.listAngulaFire = this.firebaseDB.list('/contatoUrgencias', values => values.orderByChild('indexType'));
    this.listAngulaFire.valueChanges().subscribe(resultValue =>
    {
      this.FilterValues(resultValue);
    });
  }

  FilterValues(data)
  {
    if(data.length == 0)
    {
    }
    else 
    {
      this.values = data;
      
      for(let i = 0; i < this.values.length; i++)
      {
        
        this.typeUrgency.forEach(type => 
        {
          if(type.value == this.values[i].indexType)
          {
            this.values[i].indexType = type.name;
          }
        });

      }
    
    }
  }

  proximo(nomeDaPagina: string)
  {
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
