import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  job = 'Teacher';
  name = 'aymen Sellaouti';
  path = 'rotating_card_profile3.png';
  constructor() { }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
  }

}
