import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clickHandler(){
    // window.location.href='https://rzp.io/l/DeventureRide';
    (window as any).open('https://rzp.io/l/DeventureRide', "_blank");
  }
}
