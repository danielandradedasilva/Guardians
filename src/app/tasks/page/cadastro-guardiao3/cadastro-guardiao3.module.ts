import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CadastroGuardiao3Page } from './cadastro-guardiao3.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CadastroGuardiao3Page
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroGuardiao3Page]
})
export class CadastroGuardiao3PageModule {}
