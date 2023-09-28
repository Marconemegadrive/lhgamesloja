import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';
import { RestritoComponent } from './restrito.component';
import { GuardGuard } from '../guard.guard';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

const restritoRoutes: Routes = [

    {

       path: 'restrito', component: RestritoComponent, children: [
          {path: 'cadastro', component: CadastroProdutoComponent, canActivate: [GuardGuard]},
          {path: 'lista', component: ListaProdutoComponent, canActivate: [GuardGuard]},
          {path: 'editar/:id', component: AtualizarProdutoComponent, canActivate: [GuardGuard]}
      ]

    },

    { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' }

]

@NgModule({
  imports: [RouterModule.forRoot(restritoRoutes)],
  exports: [RouterModule]
})
export class RestritoRoutingModule {}
