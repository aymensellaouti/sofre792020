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
      console.log('onInit detail CV');
      console.log(typeof params.id);
      const personne = this.cvService.getPersonneById(+params.id);
      if (personne) {
        this.personne = personne;
      } else {
        this.router.navigate(['']);
      }
    });
  }
}