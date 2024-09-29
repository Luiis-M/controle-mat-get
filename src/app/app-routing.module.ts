import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotebooksComponent } from './components/notebooks/notebooks.component';
import { DispositivosDeRedeComponent } from './components/dispositivos-de-rede/dispositivos-de-rede.component';
import { ImpressorasComponent } from './components/impressoras/impressoras.component';
import { PerifericosComponent } from './components/perifericos/perifericos.component';

const routes: Routes = [
  // Rota para o módulo de autenticação
  { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  
  // Rota para o módulo de ativos
  { path: 'ativos', loadChildren: () => import('./components/ativos/ativos.module').then(m => m.AtivosModule) },
  
  // Rota para a página Home
  { path: 'home', component: HomeComponent },
  
  // Rotas para os novos componentes
  { path: 'notebooks', loadChildren: () => import('./components/notebooks/notebooks.module').then(m => m.NotebooksModule) },
  { path: 'dispositivos-de-rede', loadChildren: () => import('./components/dispositivos-de-rede/dispositivos-de-rede.module').then(m => m.DispositivosDeRedeModule) },
  { path: 'impressoras', loadChildren: () => import('./components/impressoras/impressoras.module').then(m => m.ImpressorasModule) },
  { path: 'perifericos', loadChildren: () => import('./components/perifericos/perifericos.module').then(m => m.PerifericosModule) },
  // Redirecionamento padrão
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  
  // Rota curinga para rotas não reconhecidas
  { path: '**', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

