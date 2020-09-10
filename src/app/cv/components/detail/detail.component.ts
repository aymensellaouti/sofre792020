import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../../model/personne';
import { EmbaucheService } from '../../services/embauche.service';
import { Router } from '@angular/router';
import { CvService } from './../../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.cvService.selectPersonne.subscribe(
      (personne) => this.personne = personne
    );
  }
  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }
  detailPersonne() {
    this.router.navigate(['cv', this.personne.id]);
  }
}
