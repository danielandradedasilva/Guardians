
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { CadastroPagadorPage } from './cadastro-pagador.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CadastroPagadorPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroPagadorPage]
})
export class CadastroPagadorPageModule {}
