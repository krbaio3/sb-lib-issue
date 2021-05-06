import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PatternLibComponent } from './pattern-lib.component';

@NgModule({
  declarations: [
    PatternLibComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PatternLibComponent
  ]
})
export class PatternLibModule { }
