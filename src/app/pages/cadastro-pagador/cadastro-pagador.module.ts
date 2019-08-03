import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroPagadorPage } from './cadastro-pagador.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPagadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroPagadorPage]
})
export class CadastroPagadorPageModule {}
