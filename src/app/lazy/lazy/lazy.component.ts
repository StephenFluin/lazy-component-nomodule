import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from '../other/other.component';





@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@NgModule({
  declarations: [LazyComponent, OtherComponent],
  imports: [
    CommonModule
  ]
})
export class LazyModule { }
