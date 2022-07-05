import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: any;
  value: string;
}
const initialTodos = [
  { id: 1, value: 'Todo 1' },
  { id: 2, value: 'Todo 2' },
];

@Injectable({ providedIn: 'root' })
export class TodoService {
  private _todo$ = new BehaviorSubject<Todo[]>(initialTodos);
  readonly todos$ = this._todo$.asObservable();

  private todos: Todo[] = initialTodos;
  private nextId = 2;

  constructor() {}

  load() {
    //Load from Database
  }

  create(item: Todo) {
    item.id = ++this.nextId;

    //Update database
    this.todos.push(item);
    this._todo$.next(Object.assign([], this.todos));
  }

  remove(id: number) {
    this.todos.forEach((t, i) => {
      if (t.id === id) {
        this.todos.splice(i, 1);
      }
      this._todo$.next(Object.assign([], this.todos));
    });
  }
}
