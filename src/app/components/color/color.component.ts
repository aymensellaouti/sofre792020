import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  color = this.defaultColor;
  constructor(private activatedRoute: ActivatedRoute) {}
  changeColor(color: string) {
    console.log(color);
    this.color = color;
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((mesParams) => {
      this.color = mesParams.color;
    });
    this.activatedRoute.queryParams.subscribe((qp) => {
      console.log(qp);
    });
  }
  resetColor() {
    this.color = this.defaultColor;
  }
}
