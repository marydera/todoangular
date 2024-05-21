import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasksSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  tasks$: Observable<string[]> = this.tasksSubject.asObservable();

  constructor() {}

  getTasks(): string[] {
    return this.tasksSubject.getValue();
  }

  addTask(task: string): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.tasksSubject.next(tasks);
  }

  deleteTask(task: string): void {
    const tasks = this.getTasks().filter(t => t !== task);
    this.tasksSubject.next(tasks);
  }
}
