import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroCriancaPage } from './cadastro-crianca.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroCriancaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroCriancaPage]
})
export class CadastroCriancaPageModule {}
