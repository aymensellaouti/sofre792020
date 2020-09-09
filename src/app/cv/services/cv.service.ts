import { Injectable } from '@angular/core';
import { Personne } from './../model/personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  personnes: Personne[] = [];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 1234567, 38),
      new Personne(
        2,
        'mohamed',
        'mohamed',
        'ingenieur',
        '          ',
        1234567,
        39
      ),
      new Personne(2, 'mohamed', 'mohamed', 'ingenieur', '', 1234567, 39),
    ];
  }
  getPersonnes() {
    return this.personnes;
  }
}
