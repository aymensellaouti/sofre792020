import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { LoggerService } from 'src/app/services/logger.service';
import { TodoService } from '../../../components/todo/service/todo.service';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne = null;
  nbClick = 0;
  constructor(
    private loggerService: LoggerService,
    private todoService: TodoService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.loggerService.log('Je suis le cvComponent');
    this.cvService.selectPersonne.subscribe((personne) => this.nbClick++);
  }
  selectPersonne(personne: Personne) {
    this.todoService.logger();
  }
}
