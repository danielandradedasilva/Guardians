import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroGuardiao4Page } from './cadastro-guardiao4.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroGuardiao4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroGuardiao4Page]
})
export class CadastroGuardiao4PageModule {}
