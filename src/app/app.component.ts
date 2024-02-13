import { Component, DoCheck } from '@angular/core';
import { Task } from 'src/app/types/task';
import { NgToastService } from 'ng-angular-popup';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  tasksList: Task[] = [];
  constructor(
    private taskService: TaskService,
    private toastService: NgToastService) { }
  
  ngDoCheck(): void {
    this.tasksList = this.taskService.getList;
  }

  addTask(taskTxt: string) {
    this.taskService.createTask(taskTxt)
  }

  showSuccessMsg(doEv: boolean) {
    doEv ? 
    this.toastService.success({
      detail: 'success',
      summary: `congratulation you have finished today's tasks🥳`,
      position: 'topCenter',
      duration: 2500
    }) : false
    
  }

  trackChanges(index: number, task: Task): number {
    return task.id;
  }
}
