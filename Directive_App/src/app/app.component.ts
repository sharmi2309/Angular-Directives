import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iscleardisabled = true;
  chosenum = 1;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  calculate(divisibleBy: number) {
    this.chosenum = divisibleBy
    if (this.chosenum % divisibleBy === 0) {
      this.iscleardisabled = false;
    }
    else {
      this.iscleardisabled = true;
    } 
  }
}
