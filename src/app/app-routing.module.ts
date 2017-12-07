import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';

const routes: Routes = [
  {path: '', component: CreateTodoComponent},
  {path: 'get', component: TodoOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
