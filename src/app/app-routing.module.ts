import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'menu-cadastro', loadChildren: './tasks/tasks.module#TasksModule', canLoad: [AuthGuard] },
  { path: 'cadastro-guardiao', loadChildren: './tasks/page/cadastro-guardiao/cadastro-guardiao.module#CadastroGuardiaoPageModule' },
  { path: 'cadastro-guardiao2', loadChildren: './tasks/page/cadastro-guardiao2/cadastro-guardiao2.module#CadastroGuardiao2PageModule' },
  { path: 'cadastro-guardiao3', loadChildren: './tasks/page/cadastro-guardiao3/cadastro-guardiao3.module#CadastroGuardiao3PageModule' },
  { path: 'cadastro-guardiao4', loadChildren: './tasks/page/cadastro-guardiao4/cadastro-guardiao4.module#CadastroGuardiao4PageModule' },
  { path: 'home', loadChildren: './tasks/page/home/home.module#HomePageModule' },
  { path: 'cadastro-pagador', loadChildren: './tasks/page/cadastro-pagador/cadastro-pagador.module#CadastroPagadorPageModule' },
  { path: 'cadastro-pagador2', loadChildren: './tasks/page/cadastro-pagador2/cadastro-pagador2.module#CadastroPagador2PageModule' },
  { path: 'cadastro-pagador3', loadChildren: './tasks/page/cadastro-pagador3/cadastro-pagador3.module#CadastroPagador3PageModule' },
  { path: 'cadastro-pagador4', loadChildren: './tasks/page/cadastro-pagador4/cadastro-pagador4.module#CadastroPagador4PageModule' },
  { path: 'agenda', loadChildren: './tasks/page/agenda/agenda.module#AgendaPageModule' },
  { path: 'financeiro', loadChildren: './tasks/page/financeiro/financeiro.module#FinanceiroPageModule' },
  { path: 'cadastro-crianca', loadChildren: './tasks/page/cadastro-crianca/cadastro-crianca.module#CadastroCriancaPageModule'},
  { path: 'cadastro-urgencia', loadChildren: './tasks/page/urgencia/cadastro-urgencia/cadastro-urgencia.module#CadastroUrgenciaPageModule' },
  { path: 'contatos-urgencia', loadChildren: './tasks/page/urgencia/contatos-urgencia/contatos-urgencia.module#ContatosUrgenciaPageModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
