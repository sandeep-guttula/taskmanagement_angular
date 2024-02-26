import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Project } from '../../interface/todo';
import { TodoService } from '../../service/todo.service';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DialogModule,FormsModule,ButtonModule,InputTextModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  visible: boolean = false;
  newProjectName:string = '';
  todoService: TodoService = inject(TodoService);


  projects!: Project[]

  ngOnInit(): void {
    this.todoService.ProjectSubject.subscribe((projects) => {
      this.projects = projects;
    });
  }

  addProject(){
    if(this.newProjectName === ''){
      return;
    }
    const project: Project = {
      project_id: this.projects.length + 1,
      project_name: this.newProjectName,
    }
    this.todoService.OnProjectAdd(project);
    this.visible = false;
    this.newProjectName = '';
  }

  selectProject(project_id: number){
    this.todoService.setSelectProject(project_id);
    console.log(project_id);
  }

    showDialog() {
        this.visible = true;

    }
}
