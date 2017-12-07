import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  public createToDo(todo: Todo): Observable<Todo> {

    return this.http.post<Todo>('http://localhost:8080/api/todo', todo);
  }

  public getToDo(): Observable<Array<Todo>> {
    
    return this.http.get<Array<Todo>>('http://localhost:8080/api/todo');
  }
}
