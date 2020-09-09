import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() maPropriete = 'fils property';
  @Input() color = 'red';
  @Input() favoriteColor = 'lightblue';
  @Output() sendDataToDad = new EventEmitter();
  constructor() {}

  /*
    Le fils veut envoyer des données au papa
    1- Créer un evenement => new EventEmitter()
    2- Envoyer l'evenement avec les données => on utilise la méthode emit
  */
  sendData() {
      this.sendDataToDad.emit(this.favoriteColor);
  }

  ngOnInit(): void {}
}
