import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

import { Chart } from 'chart.js'; 

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.page.html',
  styleUrls: ['./financeiro.page.scss'],
})
export class FinanceiroPage implements OnInit {

  data: Observable<any[]>;
  listAngulaFire: AngularFireList<any>;


  reportByMonth = 
  {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
  }

  Months =
  [
    { value: 0, name: 'Janeiro' },
    { value: 1, name: 'Fevereiro' },
    { value: 2, name: 'Março' },
    { value: 3, name: 'Abril' },
    { value: 4, name: 'Maio' },
    { value: 5, name: 'Junho' },
    { value: 6, name: 'Julho' },
    { value: 7, name: 'Agosto' },
    { value: 8, name: 'Setembro' },
    { value: 9, name: 'Outubro' },
    { value: 10, name: 'Novembro' },
    { value: 11, name: 'Dezembro' },
  ];

  Transaction =
  {
    value: 0,
    month: 0,
    note: ""
  };

  
  @ViewChild('barsCanvas') barCanvas;
  barsChart: any;
  chartData = null;


  constructor(
    private navCtrl: NavController, 
    private firebaseDB: AngularFireDatabase, 
    private toastCtr: ToastController,
    private angularFireAuth: AngularFireAuth
  ) { }

  ngOnInit() 
  {
    this.beforeLoadChart();
  }

  async beforeLoadChart()
  {
    let user = this.angularFireAuth;
    
    if(user.auth.currentUser == null)
    {
      let toast = await this.toastCtr.create(
      {
        message: "Voçê Não se conectou, por favor se conect para obter seus Dados",
        duration: 5000
      });
      toast.present();
    }
    else 
    {
      this.listAngulaFire = this.firebaseDB.list('/valuesChart', values => values.orderByChild('month'));
      
      this.listAngulaFire.valueChanges().subscribe(resultValue =>
      {
        let result = resultValue.filter(valueChart => user.auth.currentUser.uid == valueChart.idUser);
        
        if(this.chartData)
        {
          this.updateChart(result);
        }
        else
        {
          this.createCharts(result);
        }

      });
    }
  }
  

  async addTransaction() 
  {
    let user = this.angularFireAuth;
    if(user.auth.currentUser == null)
    {
      let toast = await this.toastCtr.create(
      {
        message: "Voçê Não tem permissão para este tipo de ação.",
        duration: 5000
      });
      toast.present();
    }
    else 
    {
      this.listAngulaFire = this.firebaseDB.list('/valuesChart');
      if(this.CheckOut())
      {
        this.listAngulaFire.push(
        {
          idUser: user.auth.currentUser.uid,
          value: this.Transaction.value, 
          month: this.Transaction.month,
          note: this.Transaction.note
        });
        this.AlertSucess();
        this.beforeLoadChart();
      }

      // Return of Myobjecsts;
      console.log('Moths: ',  this.Transaction.month);
      console.log('value: ',  this.Transaction.value);
    }
  }
    
  CheckOut()
  {
    let errors = [];
    
    if(this.Transaction.value <= 0)
    {
      errors.push("Por favor, insira um valor que seja maior que zero");
    }

    if(this.Transaction.note == "")
    {
      errors.push("Por favor, insira pelo menos uma descrição de gasto");
    }
    
    for(let i = 0; i < this.chartData.length; i++)
    {
      if(this.chartData[i].month == this.Transaction.month)
      {
        errors.push("Vc já insiriu valor neste mês, por favor escolher outro");
      }
    }
    
    if(errors.length > 0)
    {
      this.AlertErrors(errors);
      return false;
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
      message: "Valor Adicionado com sucesso",
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

  getReportValues()
  {
    for(let trans of this.chartData)
    { 
      if(this.reportByMonth[trans.month] == null)
      { 
        this.reportByMonth[trans.month] = trans.value;
      }
    }
    
    return Object.keys(this.reportByMonth).map(a => this.reportByMonth[a]);
  }

  // FilterValuesForDOM(valuesChart)
  // {
  //   let chartDataAux = valuesChart;

  //   for(let i = 0; i < chartDataAux.length; i++)
  //   {
  //     debugger
  //     if(this.Months[i].value == chartDataAux[i].month)
  //   	{
  //   		chartDataAux[i].month = this.Months[i].name;
  //   	}
  //   }

  //   this.auxValuesChart = chartDataAux;
  //   console.log("My Months: ", this.auxValuesChart);
  // }

  createCharts(data)
  {
    this.chartData = data;
    let chartData = this.getReportValues();

    console.log("My array of Chart", this.chartData);
    this.barsChart = new Chart(this.barCanvas.nativeElement, 
    {
      type: 'bar',
      data: 
      {
        labels: Object.keys(this.Months).map(indexM => this.Months[indexM].name),
        datasets: 
        [{
          data: chartData,
          backgroundColor: '#3880ff',
          borderWidth: 1
        }]
      },
      options: 
      {
        legend: 
        {
          display: false
        },
        scales: 
        {
          yAxes: 
          [{
            ticks: 
            {
              callback: function (value)
              {
                return 'R$: ' + value; 
              },
              beginAtZero: true
            }
          }]
        }
      }
    
    });
    
  }
  
  
  updateChart(data)
  {
    this.chartData = data;
    let chartData = this.getReportValues();
    
    this.barsChart.data.datasets.forEach(dataset =>
    {
      dataset.data = chartData;  
    });
          
    this.barsChart.update();
  };


  proximo(nomeDaPagina: string) 
  {
    this.navCtrl.navigateForward(nomeDaPagina);
  }

  voltar(paraPagina) 
  {
    this.navCtrl.navigateBack(paraPagina);
  }

}
