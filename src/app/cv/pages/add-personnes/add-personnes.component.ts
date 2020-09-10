import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-personnes',
  templateUrl: './add-personnes.component.html',
  styleUrls: ['./add-personnes.component.css'],
})
export class AddPersonnesComponent implements OnInit {
  constructor(private cvService: CvService, private router: Router) {}

  ngOnInit(): void {}
  addPersonne(form: NgForm) {
    this.cvService.addPersonne(form.value);
    this.router.navigate(['cv']);
  }
}
