import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo/add-todo.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { UserTodosComponent } from './components/user-todos/user-todos.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent,
    HeaderComponent,
    LoginComponent,
    UserTodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
