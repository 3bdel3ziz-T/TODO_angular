import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'clear-btn',
  templateUrl: './clear-all.component.html',
  styleUrls: ['./clear-all.component.scss']
})
export class ClearAllComponent {
  constructor(private taskService: TaskService) { }
  clearTasks() {
    this.taskService.clearAll()
  }
}
