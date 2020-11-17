import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private viewContainerRef: ViewContainerRef, 
    private cfr: ComponentFactoryResolver,) { }

  ngOnInit(): void {
  }
  
}
