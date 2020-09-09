import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne = null;
  @Output() selectPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectCv() {
    this.selectPersonne.emit(
      this.personne
    );
  }

}