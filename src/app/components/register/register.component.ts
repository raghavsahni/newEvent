import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  payments(){
    // this.router.navigate(["/payments"]);
    (window as any).open('https://pages.razorpay.com/DeventureSelectHustleRide', "_blank");


  }
}
