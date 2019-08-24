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
   {path: 'cadastro-guardiao',
    loadChildren: './page/cadastro-guardiao/cadastro-guardiao.module#CadastroGuardiaoPageModule'
  },
    {path: 'cadastro-guardiao2',
     loadChildren: './page/cadastro-guardiao2/cadastro-guardiao2.module#CadastroGuardiao2PageModule'
     },
     { path: 'cadastro-guardiao3',
      loadChildren: './page/cadastro-guardiao3/cadastro-guardiao3.module#CadastroGuardiao3PageModule'
     },
     { path: 'cadastro-guardiao4',
      loadChildren: './page/cadastro-guardiao4/cadastro-guardiao4.module#CadastroGuardiao4PageModule'
     },
     { path: 'home',
      loadChildren: './page/home/home.module#HomePageModule'
     },
     { path: 'cadastro-pagador',
      loadChildren: './page/cadastro-pagador/cadastro-pagador.module#CadastroPagadorPageModule'
     },
     { path: 'cadastro-pagador2',
      loadChildren: './page/cadastro-pagador2/cadastro-pagador2.module#CadastroPagador2PageModule'
     },
     { path: 'cadastro-pagador3',
      loadChildren: './page/cadastro-pagador3/cadastro-pagador3.module#CadastroPagador3PageModule'
     },
     { path: 'cadastro-pagador4',
      loadChildren: './page/cadastro-pagador4/cadastro-pagador4.module#CadastroPagador4PageModule'
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
    {
       path: 'cadastro-urgencia',
        loadChildren: './page/urgencia/cadastro-urgencia/cadastro-urgencia.module#CadastroUrgenciaPageModule' },
    { path: 'contatos-urgencia',
     loadChildren: './page/urgencia/contatos-urgencia/contatos-urgencia.module#ContatosUrgenciaPageModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
