import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'event2';
// }

export class AppComponent implements AfterViewInit  {

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {
   
    
  }
  title = 'Deventure Select';



onActivate(event) {
  window.scroll(0,0);
  
}
}
