import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DataFormComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]

})
export class DataFormModule { }
