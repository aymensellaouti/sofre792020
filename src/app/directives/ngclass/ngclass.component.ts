import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
})
export class NgclassComponent implements OnInit {
  allume = 0;
  constructor() {}
  evaluate() {
    return this.allume === 5;
  }
  ngOnInit(): void {
    /* setInterval(() => {
      this.allume = !this.allume;
    }, 1000); */
  }
}
