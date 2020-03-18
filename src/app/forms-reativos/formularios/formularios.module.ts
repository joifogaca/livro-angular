import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosComponent } from './formularios.component';


@NgModule({
  declarations: [FormulariosComponent],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormulariosModule { }
