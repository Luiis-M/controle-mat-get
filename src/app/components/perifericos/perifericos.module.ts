import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerifericosRoutingModule } from './perifericos-routing.module';
import { PerifericosComponent } from './perifericos.component';


@NgModule({
  declarations: [PerifericosComponent],
  imports: [
    CommonModule,
    PerifericosRoutingModule
  ]
})
export class PerifericosModule { }
