import { Component, OnInit } from '@angular/core';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 1234567, 38),
      new Personne(2, 'mohamed', 'mohamed', 'ingenieur', 'test.jpg', 1234567, 39)
    ];
  }

  ngOnInit(): void {
  }

}
