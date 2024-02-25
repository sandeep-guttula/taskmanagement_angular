import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import  { Todo } from '../../interface/todo'
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-add-todo-btn',
  standalone: true,
  imports: [FormsModule,ButtonModule,DialogModule,InputTextModule,DropdownModule],
  templateUrl: './add-todo-btn.component.html',
  styleUrl: './add-todo-btn.component.css'
})
export class AddTodoBtnComponent implements OnInit{
  visible: boolean = false;
  newProjectName:string = '';
  startDate: string = '';
  endDate: string = '';
  status: string = ''; 

  todoService: TodoService = inject(TodoService);


  todos!: Todo[]

  ngOnInit() {
    this.todoService.TodoSubject.subscribe((todos) => {
      this.todos = todos;
    })
  }

  showDialog() {
      this.visible = true;
  }

  hideDialog() {
      this.visible = false;
  }

  addTodo(){
    const todo:Todo = {
      todo_id: this.todos.length + 1,
      project_id: this.todoService.currentSelectedProject_id.value,
      todo_name: this.newProjectName,
      start_date: this.startDate,
      end_date: this.endDate,
      status: this.status
    }
    console.log(todo);
    this.todoService.OnTodoAdd(todo);
    this.visible = false;
    this.newProjectName = '';
    this.startDate = '';
    this.endDate = '';
    this.status = '';
  }
}