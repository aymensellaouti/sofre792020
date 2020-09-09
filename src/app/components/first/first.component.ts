import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  isHidden = false;
  constructor() {}
  showHide(message) {
    this.isHidden = !this.isHidden;
    console.log(message);
  }
  ngOnInit(): void {}
}
