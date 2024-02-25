import { Component, OnInit, inject } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  todoService: TodoService = inject(TodoService);

  title!: string;

  constructor() { }

  ngOnInit(): void {
    this.todoService.currentSelectedProject_id.subscribe((project_id) => {
      this.title = this.todoService.projects.find(project => project.project_id === project_id)?.project_name || '';
      // this.title = this.todoService.projects[project_id].project_name;
    })
  }
}
