import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu-cadastro', loadChildren: './pages/menu-cadastro/menu-cadastro.module#MenuCadastroPageModule' },
  { path: 'cadastro-guardiao', loadChildren: './pages/cadastro-guardiao/cadastro-guardiao.module#CadastroGuardiaoPageModule' },
  { path: 'cadastro-pagador', loadChildren: './pages/cadastro-pagador/cadastro-pagador.module#CadastroPagadorPageModule' },
  { path: 'cadastro-guardiao2', loadChildren: './pages/cadastro-guardiao2/cadastro-guardiao2.module#CadastroGuardiao2PageModule' },
  { path: 'cadastro-guardiao3', loadChildren: './pages/cadastro-guardiao3/cadastro-guardiao3.module#CadastroGuardiao3PageModule' },
  { path: 'cadastro-guardiao4', loadChildren: './pages/cadastro-guardiao4/cadastro-guardiao4.module#CadastroGuardiao4PageModule' },
  { path: 'cadastro-pagador2', loadChildren: './pages/cadastro-pagador2/cadastro-pagador2.module#CadastroPagador2PageModule' },
  { path: 'cadastro-pagador3', loadChildren: './pages/cadastro-pagador3/cadastro-pagador3.module#CadastroPagador3PageModule' },
  { path: 'cadastro-pagador4', loadChildren: './pages/cadastro-pagador4/cadastro-pagador4.module#CadastroPagador4PageModule' },
  { path: 'financeiro', loadChildren: './pages/financeiro/financeiro.module#FinanceiroPageModule' },
  { path: 'agenda', loadChildren: './pages/agenda/agenda.module#AgendaPageModule' },  { path: 'cadastro-crianca', loadChildren: './pages/cadastro-crianca/cadastro-crianca.module#CadastroCriancaPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
