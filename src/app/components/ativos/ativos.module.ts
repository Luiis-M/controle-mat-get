import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AtivosComponent } from './ativos.component';

const routes: Routes = [
  { path: '', component: AtivosComponent },
];


@NgModule({
  declarations: [AtivosComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AtivosModule { }
