import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroPagador3Page } from './cadastro-pagador3.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPagador3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroPagador3Page]
})
export class CadastroPagador3PageModule {}
