import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    PosComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    PosRoutingModule,
    FormsModule,
    MaterialModule,
    NgxPrintModule,
  ]
})
export class PosModule { }
