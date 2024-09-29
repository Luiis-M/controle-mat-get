import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivosDeRedeComponent } from './dispositivos-de-rede.component';

const routes: Routes = [
  { path: '', component: DispositivosDeRedeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispositivosDeRedeRoutingModule { }
