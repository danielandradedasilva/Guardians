import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroGuardiao2Page } from './cadastro-guardiao2.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroGuardiao2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroGuardiao2Page]
})
export class CadastroGuardiao2PageModule {}
