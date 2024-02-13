import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/types/task';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  edit: boolean = false;
  @ViewChild('inputEl') inputEl!: ElementRef;
  @Input()
  task!: Task;
  @Output()
  checkStatus: EventEmitter<boolean> = new EventEmitter<boolean>

  constructor(private TaskService: TaskService, private toastService: NgToastService) { }
  ngOnInit(): void {
  }

  changeStatus(id: number) {
    this.TaskService.changeState(id);
    this.checkStatus.emit(this.TaskService.checkStatus);
  }

  OnDelete(id: number) {
    this.TaskService.deleteTask(id)
  }

  openEdit() {
    this.edit = true;
    setTimeout(() => this.inputEl.nativeElement.focus(), 100);
  }

  OnEdit(id: number) {
    this.edit = false;

    if (this.inputEl.nativeElement.value !== '') {
      this.TaskService.editTask(id, this.inputEl.nativeElement.value)
      this.inputEl.nativeElement.value = ''
    } else {
      this.toastService.info({
        detail: 'info',
        summary: 'the new task is Empty please write something',
        duration: 2500,
        position: 'topCenter'
      })
    }
  }
}
