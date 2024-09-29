import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressorasComponent } from './impressoras.component';

const routes: Routes = [
  { path: '', component: ImpressorasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpressorasRoutingModule { }
