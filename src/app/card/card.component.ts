import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  job = 'Teacher';
  name = 'aymen Sellaouti';
  path = 'rotating_card_profile3.png';
  constructor() { }

  ngOnInit(): void {
  }

}
