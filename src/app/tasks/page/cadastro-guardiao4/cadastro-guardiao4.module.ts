import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroGuardiao4Page } from './cadastro-guardiao4.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CadastroGuardiao4Page
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroGuardiao4Page]
})
export class CadastroGuardiao4PageModule {}
