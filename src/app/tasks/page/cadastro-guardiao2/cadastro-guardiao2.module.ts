import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroGuardiao2Page } from './cadastro-guardiao2.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CadastroGuardiao2Page
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroGuardiao2Page]
})
export class CadastroGuardiao2PageModule {}
