import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfiguracoesPage } from './configuracoes.page';

import { CadastroCriancaPageModule } from '../cadastro-crianca/cadastro-crianca.module';
import { CadastrarGuardiaoPageModule } from '../cadastrar-guardiao/cadastrar-guardiao.module';
import { CadastrarPagadorPageModule } from '../cadastrar-pagador/cadastrar-pagador.module';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracoesPage
  },
  { 
    path: 'cadastro-crianca', 
    component: CadastroCriancaPageModule
  },
  {
    path: 'cadastrar-guardiao', 
    component: CadastrarGuardiaoPageModule
  },
  {
    path: 'cadastrar-pagador', 
    component: CadastrarPagadorPageModule
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfiguracoesPage]
})
export class ConfiguracoesPageModule {}
