// todoApp/src/app/components/add-todo/add-todo/add-todo.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  @Output() newTodoAdded: EventEmitter<any> = new EventEmitter();
  showComponent = false;
  newTodo: { title: string, priority: string } = { title: '', priority: '' };
  todoList: any[] = [];
  errorMessage: string = ''; 

  constructor(private todoService: TodoService) { }

  toggleComponentVisibility() {
    this.showComponent = !this.showComponent;
  }

  addTodo() {
    if (this.newTodo.title.trim() === '') {
      this.errorMessage = 'Please enter a todo title.';
      return; 
    }

    const todo = {
      title: this.newTodo.title,
      completed: false,
      priority: this.newTodo.priority,
    };

    this.todoService.addTodo(todo).subscribe((data) => {
      console.log('Todo added:', data);
      this.newTodoAdded.emit(data);
      console.log('Emitting new todo:', data);
      this.newTodo.title = '';
      this.errorMessage = ''; 
      this.showComponent = !this.showComponent;
    });
  }
}
