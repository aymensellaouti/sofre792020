import { Component, OnInit } from '@angular/core';
import { Personne } from './../model/personne';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne = null;
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.log('Je suis le cvComponent');
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
