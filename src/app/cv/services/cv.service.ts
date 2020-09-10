import { Injectable } from '@angular/core';
import { Personne } from './../model/personne';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  personnes: Personne[] = [];
  selectPersonne = new Subject<Personne>();
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
  getPersonneById(id: number): Personne {
    return this.personnes.find((personne) => {
      if (personne.id === id) return personne;
    });
  }
  addPersonne(personne: Personne) {
    if (this.personnes.length) {
      personne.id = this.personnes[this.personnes.length - 1].id + 1;
    } else {
      personne.id = 1;
    }
    this.personnes.push(personne);
  }
  broadcastSelectedPersonne(personne: Personne) {
    this.selectPersonne.next(personne);
  }
}
