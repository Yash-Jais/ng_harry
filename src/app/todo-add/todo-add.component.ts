import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from "../todo/Todo";
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  srno: number | undefined;
  title: string | undefined;
  desc: string | undefined;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter;

  constructor() { }

  onSubmit() {
    console.log("Clicked From todo add");
    const todo = {
      srNo: this.srno,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }

  ngOnInit(): void {
  }

}
