import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  color = this.defaultColor;
  constructor() {}
  changeColor(color: string) {
    console.log(color);
    this.color = color;
  }
  ngOnInit(): void {}
  resetColor() {
    this.color = this.defaultColor;
  }
}
