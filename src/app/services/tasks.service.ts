import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasksUrl = 'https://ljutic-task-manager.herokuapp.com/tasks';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<any>(this.tasksUrl);
  }
  
  createTask(task) {
    return this.http.post<any>(this.tasksUrl, task);
  }

  updateTask(taskId, updates) {
    return this.http.patch<any>(`${this.tasksUrl}/${taskId}`, updates);
  }

  deleteTask(taskId) {
    return this.http.delete<any>(`${this.tasksUrl}/${taskId}`);
  }
}
