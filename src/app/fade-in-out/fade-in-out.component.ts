import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-fade-in-out',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fade-in-out.component.html',
  styleUrl: './fade-in-out.component.css',
})
export class FadeInOutComponent implements OnInit {
  tasks: string[] = [];
  newTask: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.tasks$.subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(): void {
    if (this.newTask.trim()) {
      this.todoService.addTask(this.newTask.trim());
      this.newTask = '';
    }
  }

  deleteTask(task: string): void {
    this.todoService.deleteTask(task);
  }
}

// export class FadeInOutComponent {
//   // tasks: string[] = [];
//   // newTask: string = '';

//   // addTask() {
//   //   if (this.newTask.trim()) {
//   //     this.tasks.push(this.newTask.trim());
//   //     this.newTask = '';
//   //   }
//   // }

//   // deleteTask(task: string) {
//   //   this.tasks = this.tasks.filter(t => t !== task);
//   // }
// }
