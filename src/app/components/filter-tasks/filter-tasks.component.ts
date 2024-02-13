import { Component, ElementRef, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'filter-tasks',
  templateUrl: './filter-tasks.component.html',
  styleUrls: ['./filter-tasks.component.scss']
})
export class FilterTasksComponent implements OnInit {
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.taskService.getFilterOption(`all`)
  }
  filterOption(El: HTMLInputElement) {
    this.taskService.getFilterOption(El.value)
  }
}
