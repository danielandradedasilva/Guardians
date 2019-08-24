import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCadastroPage } from './menu-cadastro.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MenuCadastroPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuCadastroPage]
})
export class MenuCadastroPageModule {}
