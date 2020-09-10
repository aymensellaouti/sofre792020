import { Injectable } from '@angular/core';
import { Personne } from './../model/personne';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const API_PERSONNE_LINK =
  'https://immense-citadel-91115.herokuapp.com/api/personnes';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  personnes: Personne[] = [];
  selectPersonne = new Subject<Personne>();
  constructor(private http: HttpClient) {
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
  getFakePersonnes() {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_PERSONNE_LINK);
  }
  getFakePersonneById(id: number): Personne {
    return this.personnes.find((personne) => {
      if (personne.id === id) return personne;
    });
  }
  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(API_PERSONNE_LINK + '/' + id);
  }

  deletePersonneById(id: number): Observable<any> {
    return this.http.delete<any>(API_PERSONNE_LINK + '/' + id);
  }

  addPersonne(personne: Personne): Observable<Personne> {
    return this.http.post<Personne>(API_PERSONNE_LINK, personne);
  }
  broadcastSelectedPersonne(personne: Personne) {
    this.selectPersonne.next(personne);
    /*     localStorage.setItem('token', token); */
  }
}
