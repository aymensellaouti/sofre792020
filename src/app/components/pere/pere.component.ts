import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  couleurDuPere = 'green';
  constructor() { }

  /*
    1- Ecouter l'evenement emis par le fils
    2- Faire le traitement nécessaire et pour récupérer la data il ya la variable $event
  */
  ngOnInit(): void {
  }
  processSonData(sonColor: string) {
    this.couleurDuPere = sonColor;
  }
}
