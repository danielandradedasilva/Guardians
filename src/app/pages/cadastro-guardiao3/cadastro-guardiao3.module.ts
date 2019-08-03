import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroGuardiao3Page } from './cadastro-guardiao3.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroGuardiao3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroGuardiao3Page]
})
export class CadastroGuardiao3PageModule {}
