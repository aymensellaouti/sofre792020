import { Injectable } from '@angular/core';
import { Personne } from './../model/personne';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  embauches: Personne[] = [];
  constructor() {}
  /*
   * Permet d'embaucher une personne
   */
  embaucher(personne: Personne) {
    // On ne peut embaucher une personne qu'une seule fois
    const index = this.embauches.indexOf(personne);
    if (index === -1) {
      this.embauches.push(personne);
      console.log('personne embauché');
    } else {
      alert(`${personne.name} d'id ${personne.id} est déjà embauché`);
    }
  }
  /* Retourne la liste des personnes embauchées*/
  getEbauchées(): Personne[] {
    return this.embauches;
  }
}
