import { Injectable } from '@angular/core';
import { Project, Todo } from '../interface/todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  projects: Project[] = [];
  ProjectSubject = new BehaviorSubject<Project[]>(this.projects);


  todos: Todo[] = [];
  TodoSubject = new BehaviorSubject<Todo[]>(this.todos);


  currentSelectedProject_id = new BehaviorSubject<number>(-1);

  constructor() { }

  OnProjectAdd(project: Project){
    this.projects.push(project);
    this.ProjectSubject.next(this.projects);
    console.log(this.projects);
  }

  OnTodoAdd(todo: Todo){
    this.todos.push(todo);
    this.TodoSubject.next(this.todos);
    console.log(this.todos);
  }

  setSelectProject(project_id: number){
    this.currentSelectedProject_id.next(project_id);
  }
}
