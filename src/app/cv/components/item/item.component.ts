import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../../model/personne';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne = null;
  /*   @Output() selectPersonne = new EventEmitter();
   */ constructor(private cvService: CvService) {}

  ngOnInit(): void {}
  selectCv() {
    this.cvService.broadcastSelectedPersonne(this.personne);
    /*     this.selectPersonne.emit(
      this.personne
    ); */
  }
}
