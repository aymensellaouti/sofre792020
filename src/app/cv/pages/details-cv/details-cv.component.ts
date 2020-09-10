import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent implements OnInit {
  personne: Personne = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.getPersonneById(+params.id).subscribe(
        (personne) => this.personne = personne,
        (erreur) => this.router.navigate([''])
      );
    });
  }

  deletePersonne() {
    this.cvService.deletePersonneById(this.personne.id).subscribe(
      (response) => this.router.navigate(['cv']),
      (erreur) => console.log(erreur)
    );

  }
}
