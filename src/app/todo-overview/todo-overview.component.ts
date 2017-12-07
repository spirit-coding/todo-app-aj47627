import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styles: []
})
export class TodoOverviewComponent implements OnInit {

  public todoArray: Array<Todo>;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getToDo().subscribe(
      data => {
        this.todoArray = data

    },  
    err => {
      alert('Something went wrong!')
    }
    )
  }

}
