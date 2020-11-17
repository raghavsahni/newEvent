import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clickHandler(){
    // window.location.href='https://rzp.io/l/DeventureRide';
    (window as any).open('https://rzp.io/l/DeventureRide', "_blank");
  }
}
