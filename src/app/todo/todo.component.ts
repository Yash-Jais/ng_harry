import { Component, OnInit, EventEmitter } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  localItem: string | null;

  todos: Todo[];

  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }


  deleteTodo(todo: Todo) {
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log(index);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  ngOnInit(): void {
  }

}


/*  { srNo: 1, title: 'First Todo', desc: 'this is todo 1', active: true },
       { srNo: 2, title: 'Second Todo', desc: 'this is todo 2', active: true },
       { srNo: 3, title: 'Third Todo', desc: 'this is todo 3', active: true },
       { srNo: 4, title: 'Fourth Todo', desc: 'this is todo 4', active: true }, */