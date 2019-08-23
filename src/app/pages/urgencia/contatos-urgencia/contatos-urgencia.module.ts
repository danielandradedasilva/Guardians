import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContatosUrgenciaPage } from './contatos-urgencia.page';

const routes: Routes = [
  {
    path: '',
    component: ContatosUrgenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContatosUrgenciaPage]
})
export class ContatosUrgenciaPageModule {}
