// todo-list.component.ts
import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() newTodoAdded: any[] = [""];
  todos: any[] = [];
  newTodo:any[]=[];
  isUserLoggedIn = true;
  searchTitle: string = '';
  searchPriority: string = '';
  filteredTodos: any[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = true;
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data.map((todo) => {
       
        if (!todo.priority) {
          todo.priority = 'Low';
          
        }
        return todo;
       
      });
      
      
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonChange",changes)
    if (changes['newTodoAdded'] && changes['newTodoAdded'].currentValue) {
      this.addNewTodos(changes['newTodoAdded'].currentValue);
    }
  }
  onNewTodoAdded(todoObject: any): void {
    console.log('Received new todo:', todoObject);
    const updatedNewTodo = [todoObject];
    this.newTodo = updatedNewTodo;
    console.log(this.newTodo);
  }

  addNewTodos(newTodos: any[]): void {
    this.todos = [...newTodos, ...this.todos];
  }

  deleteTodo(todo: any): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }

    const filteredIndex = this.filteredTodos.indexOf(todo);
  if (filteredIndex !== -1) {
    this.filteredTodos.splice(filteredIndex, 1);
  }
    
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'High':
        return 'high-priority';
      case 'Medium':
        return 'medium-priority';
      case 'Low':
        return 'low-priority';
      default:
        return '';
    }
  }

  search() {
    this.filteredTodos = this.todos.filter(todo =>
      (todo.title.toLowerCase().includes(this.searchTitle.toLowerCase()) ||
        !this.searchTitle) && 
      (todo.priority === this.searchPriority || !this.searchPriority) 
    );
    
  }

 

  clearSearch() {
    this.searchTitle = ''; 
    this.searchPriority = ''; 
    this.filteredTodos = []; 
  }
}
