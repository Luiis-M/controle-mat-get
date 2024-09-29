import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebooksComponent } from './notebooks.component';
import { NotebooksRoutingModule } from './notebooks-routing.module';

@NgModule({
  declarations: [NotebooksComponent],
  imports: [
    CommonModule,
    NotebooksRoutingModule
  ]
})
export class NotebooksModule { }