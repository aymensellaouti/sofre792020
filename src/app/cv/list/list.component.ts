import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  @Output() fowardSelectedPersonne = new EventEmitter();
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 1234567, 38),
      new Personne(2, 'mohamed', 'mohamed', 'ingenieur', 'cv.png', 1234567, 39),
    ];
  }
  forwardPersonne(personne: Personne) {
    this.fowardSelectedPersonne.emit(personne);
  }

  ngOnInit(): void {}
}
