import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy-test';
  constructor(private cfr: ComponentFactoryResolver, private vcr: ViewContainerRef) {

  }
  async load() {
    const { LazyComponent } = await import('./lazy/lazy/lazy.component');
    this.vcr.createComponent(this.cfr.resolveComponentFactory(LazyComponent));
  }
}
