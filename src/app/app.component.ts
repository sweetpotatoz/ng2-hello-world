import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Angular 2 Workshop';
  yourName = 'Chris';
  noOfClicks = 0;

  keepTrack(isClick: boolean) {
    if (isClick) {
      this.noOfClicks += 1;
    }
    console.log('total click: ' + this.noOfClicks)
  }
}

