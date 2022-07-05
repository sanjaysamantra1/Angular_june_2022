import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  template: `
    <div>
      <h3>Add Todo</h3>
      <input #addToDo /> &nbsp;
      <button (click)="addNewTodo(addToDo)">Add New Todo</button>
    </div>
  `,
})
export class TodoAddComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  ngOnInit() {}

  addNewTodo(inputBox: any) {
    const newTodo = { value: inputBox.value, id: null };
    this.todoService.create(newTodo);
    inputBox.value = '';
  }
}
