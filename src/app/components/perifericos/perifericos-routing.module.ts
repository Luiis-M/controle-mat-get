import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerifericosComponent } from './perifericos.component';

const routes: Routes = [
  { path: '', component: PerifericosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerifericosRoutingModule { }
