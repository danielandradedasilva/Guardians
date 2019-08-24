import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroGuardiaoPage } from './cadastro-guardiao.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CadastroGuardiaoPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroGuardiaoPage]
})
export class CadastroGuardiaoPageModule {}
