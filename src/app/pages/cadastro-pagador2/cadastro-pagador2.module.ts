import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroPagador2Page } from './cadastro-pagador2.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPagador2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroPagador2Page]
})
export class CadastroPagador2PageModule {}
