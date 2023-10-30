import { Component } from '@angular/core';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css']
})
export class UserTodosComponent {
  newTodo:any[]=[];
  isUserLoggedIn = true;


  onNewTodoAdded(todoObject: any): void {
    console.log('Received new todo:', todoObject);
    const updatedNewTodo = [todoObject];
    this.newTodo = updatedNewTodo;
    console.log(this.newTodo);
  }

}
