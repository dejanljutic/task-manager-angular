import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getTasks()
      .subscribe(
        res => {
          this.tasks = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  toggleCompleted(task) {
    const updates = { completed : !task.completed }
    this.tasksService.updateTask(task._id, updates)
      .subscribe(
        res => {
          this.getTasks();
        },
        err => {
          console.log(err);
        }
      );
  }

  changeDescription(task) {
    const updates = { description : task.description}
    this.tasksService.updateTask(task._id, updates)
      .subscribe(
        res => {
          this.getTasks();
        },
        err => {
          console.log(err);
        }
      );
  }

  deleteTask(task) {
    this.tasksService.deleteTask(task._id) 
      .subscribe (
        res => {
          this.getTasks();
        },
        err => {
          console.log(err);
        }
      );
  };

}
