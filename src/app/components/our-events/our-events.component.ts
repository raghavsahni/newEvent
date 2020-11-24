import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-our-events',
  templateUrl: './our-events.component.html',
  styleUrls: ['./our-events.component.css']
})
export class OurEventsComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {

  }
  clickHandler(){
    this.router.navigate(["/hustleRide"]);

  }

}
