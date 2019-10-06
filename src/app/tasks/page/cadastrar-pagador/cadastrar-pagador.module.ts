import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarPagadorPage } from './cadastrar-pagador.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarPagadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarPagadorPage]
})
export class CadastrarPagadorPageModule {}
