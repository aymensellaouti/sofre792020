import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css'],
})
export class NgstyleComponent implements OnInit {
  @Input() color = 'blue';
  @Input() bg = 'pink';
  font = 'verdana';
  size = '45px';
  constructor() {}

  ngOnInit(): void {}
}
