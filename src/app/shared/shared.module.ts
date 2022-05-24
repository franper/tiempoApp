import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResaltedDirective } from './directives/resalted.directive';



@NgModule({
  declarations: [
    ResaltedDirective
  ],
  exports: [
    ResaltedDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
