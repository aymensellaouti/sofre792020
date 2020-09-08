import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent implements OnInit {
  color = 'blue';
  alignement = 'left';
  font = 'verdana';
  size = 45;
  constructor() {}

  ngOnInit(): void {}

  aligner(sens: string) {
    this.alignement = sens;
  }
}
