import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from 'src/app/services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private loggerService: LoggerService) {}
  logger(): void {
    this.loggerService.log(this.todos);
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index < 0) {
      alert(`Le todo d'id ${todo.id} est innexistant`);
    } else {
      this.todos.splice(index, 1);
    }
  }
  getTodos(): Todo[] {
    return this.todos;
  }
}
