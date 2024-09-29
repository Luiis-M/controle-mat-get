import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpressorasRoutingModule } from './impressoras-routing.module';
import { ImpressorasComponent } from './impressoras.component';


@NgModule({
  declarations: [ImpressorasComponent],
  imports: [
    CommonModule,
    ImpressorasRoutingModule
  ]
})
export class ImpressorasModule { }
