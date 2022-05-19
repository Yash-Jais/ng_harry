import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Input() indexValue!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter;
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter;
  constructor() { }

  onBtnclick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("Button has been clicked");
  }
  onCheckboxClick(todo: Todo) {
    console.log("On checkbox Clicks");
    this.todoCheckbox.emit(todo);
  }

  ngOnInit(): void {
  }

}
