import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './page/menu-cadastro/menu-cadastro.module#MenuCadastroPageModule'
      }
    ]
  },
  { path: 'home',
    loadChildren: './page/home/home.module#HomePageModule'
  },
  { path: 'agenda',
    loadChildren: './page/agenda/agenda.module#AgendaPageModule'
  },
  { path: 'financeiro',
    loadChildren: './page/financeiro/financeiro.module#FinanceiroPageModule'
  },
  { path: 'cadastro-crianca',
    loadChildren: './page/cadastro-crianca/cadastro-crianca.module#CadastroCriancaPageModule'
  },
  { path: 'cadastro-urgencia',
    loadChildren: './page/urgencia/cadastro-urgencia/cadastro-urgencia.module#CadastroUrgenciaPageModule'
  },
  { path: 'contatos-urgencia',
    loadChildren: './page/urgencia/contatos-urgencia/contatos-urgencia.module#ContatosUrgenciaPageModule'
  },
  { path: 'cadastrar-guardiao',
    loadChildren: './page/cadastrar-guardiao/cadastrar-guardiao.module#CadastrarGuardiaoPageModule'
  },
  { path: 'cadastrar-pagador',
    loadChildren: './page/cadastrar-pagador/cadastrar-pagador.module#CadastrarPagadorPageModule'
  },
  { path: 'configuracoes',
    loadChildren: './page/configuracoes/configuracoes.module#ConfiguracoesPageModule' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
