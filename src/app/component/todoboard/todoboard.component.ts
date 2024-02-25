import { Component, OnInit, inject } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { AddTodoBtnComponent } from '../add-todo-btn/add-todo-btn.component';
import { Project, Todo } from '../../interface/todo';

@Component({
  selector: 'app-todoboard',
  standalone: true,
  imports: [AddTodoBtnComponent],
  templateUrl: './todoboard.component.html',
  styleUrl: './todoboard.component.css'
})
export class TodoboardComponent implements OnInit {

  todoService: TodoService = inject(TodoService);
  
  projects!: Project[];
  todos!: Todo[];
  selectedProject_id!: number;

  ngOnInit(): void {
      this.todoService.currentSelectedProject_id.subscribe((project_id) => {
        this.selectedProject_id = project_id;
      })
      this.todoService.ProjectSubject.subscribe((projects) => {
        this.projects = projects;
      });
      this.todoService.TodoSubject.subscribe((todos) => {
        this.todos = todos;
      })
  }

  // projects = this.todoService.projects;
}
