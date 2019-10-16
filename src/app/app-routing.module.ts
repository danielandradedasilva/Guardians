import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'menu-cadastro', loadChildren: './tasks/tasks.module#TasksModule', canLoad: [AuthGuard] },
  { path: 'home', loadChildren: './tasks/page/home/home.module#HomePageModule' },
  { path: 'agenda', loadChildren: './tasks/page/agenda/agenda.module#AgendaPageModule' },
  { path: 'financeiro', loadChildren: './tasks/page/financeiro/financeiro.module#FinanceiroPageModule' },
  { path: 'cadastro-crianca', loadChildren: './tasks/page/cadastro-crianca/cadastro-crianca.module#CadastroCriancaPageModule'},
  { path: 'cadastro-urgencia',
   loadChildren: './tasks/page/urgencia/cadastro-urgencia/cadastro-urgencia.module#CadastroUrgenciaPageModule' },
  { path: 'contatos-urgencia',
   loadChildren: './tasks/page/urgencia/contatos-urgencia/contatos-urgencia.module#ContatosUrgenciaPageModule' },
  { path: 'cadastrar-guardiao', loadChildren: './tasks/page/cadastrar-guardiao/cadastrar-guardiao.module#CadastrarGuardiaoPageModule' },
  { path: 'cadastrar-pagador', loadChildren: './tasks/page/cadastrar-pagador/cadastrar-pagador.module#CadastrarPagadorPageModule' },
  { path: 'calendario', loadChildren: './tasks/page/calendario/calendario.module#CalendarioPageModule' },
  { path: 'configuracoes', loadChildren: './tasks/page/configuracoes/configuracoes.module#ConfiguracoesPageModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
