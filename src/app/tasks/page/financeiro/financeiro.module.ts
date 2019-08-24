import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceiroPage } from './financeiro.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FinanceiroPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinanceiroPage]
})
export class FinanceiroPageModule {}
