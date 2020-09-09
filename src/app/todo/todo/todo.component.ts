import { Component, OnInit } from '@angular/core';
import { TodoService } from './../service/todo.service';
import { Todo } from './../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todo = new Todo();
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    if (this.todos.length) {
      this.todo.id = this.todos[this.todos.length - 1].id + 1;
    } else {
      this.todo.id = 1;
    }
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
