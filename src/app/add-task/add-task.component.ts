import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task = {
    description: '',
    completed: false
  }

  @Output() newTask = new EventEmitter<void>();

  callParent() {
    this.newTask.next();
  }

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  createTask(task) {
    this.tasksService.createTask(task)
      .subscribe(
        res => {
          this.callParent();
        },
        err => {
          console.log(err);
        }
      );
  }

}
