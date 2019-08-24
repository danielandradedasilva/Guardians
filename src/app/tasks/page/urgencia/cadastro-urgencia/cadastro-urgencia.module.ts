import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroUrgenciaPage } from './cadastro-urgencia.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroUrgenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroUrgenciaPage]
})
export class CadastroUrgenciaPageModule {}
