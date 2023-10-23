// todoApp/src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  newTodo:any[]=[];


  onNewTodoAdded(todoObject: any): void {
    console.log('Received new todo:', todoObject);
    const updatedNewTodo = [todoObject];
    this.newTodo = updatedNewTodo;
    console.log(this.newTodo);
  }
  
}