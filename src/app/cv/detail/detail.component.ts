import { Component, OnInit, Input } from '@angular/core';
import { Personne } from './../model/personne';
import { EmbaucheService } from './../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(private embaucheService: EmbaucheService) {}

  ngOnInit(): void {}
  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }
}
