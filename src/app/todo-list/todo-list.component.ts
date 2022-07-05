import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  template: `
    <h3>Todo List</h3>
    <div *ngFor="let todo of todos$ | async">
      {{ todo.id }} {{ todo.value }}
      <button (click)="deleteTodo(todo.id)">x</button>
    </div>
  `,
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]> | undefined;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos$ = this.todoService.todos$;
  }
  deleteTodo(todoId: number) {
    this.todoService.remove(todoId);
  }
}
