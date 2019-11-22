import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { OtherComponent } from './other/other.component';



@NgModule({
  declarations: [LazyComponent, OtherComponent],
  imports: [
    CommonModule
  ]
})
export class LazyModule { }
