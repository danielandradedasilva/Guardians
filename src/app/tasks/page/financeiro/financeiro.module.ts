import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinanceiroPage]
})
export class FinanceiroPageModule {}
