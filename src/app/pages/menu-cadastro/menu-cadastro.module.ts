import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuCadastroPage } from './menu-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCadastroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuCadastroPage]
})
export class MenuCadastroPageModule {}
