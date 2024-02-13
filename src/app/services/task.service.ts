import { Injectable, OnInit } from '@angular/core';
import { Task } from 'src/app/types/task';
import { NgToastService } from 'ng-angular-popup';
import { TaskRules } from '../models/taskRules';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit {
  filterOption!: string;
  private tasksList: Task[] = [];
  popUpService!: NgToastService;

  ngOnInit(): void {
    ('tasksList' in localStorage) ?
      this.getTasksList() : this.setTasksList();
  }

  get getList(): Task[] {
    this.getTasksList()
    if (this.filterOption === 'all') {
      return this.tasksList
    } else {
      return this.tasksList = this.tasksList.filter((e: Task) =>
        +e.isCompleted === +this.filterOption)
    }
  }

  get checkStatus(): boolean {
    this.getTasksList();
    let allCompleted: boolean,
      arr: boolean[] = [];
    this.tasksList.filter((e: Task) => e.isCompleted === false ? arr.push(e.isCompleted) : false);

    arr.length ? allCompleted = false : allCompleted = true;

    return allCompleted;
  }

  createTask(taskTxt: string): void {
    this.getTasksList()
    const newTask: Task = new TaskRules(
      +(Date.now().toString().slice(-5, -1)),
      taskTxt, false, new Date())

    this.tasksList.push(newTask);
    this.setTasksList();
  }

  getFilterOption(option: string): void {
    this.filterOption = option;
  }

  clearAll(): void {
    this.tasksList = [];
    this.setTasksList()
  }

  deleteTask(id: number): void {
    this.getTasksList();
    this.tasksList = this.tasksList.filter((e: Task) => e.id !== id)
    this.setTasksList();
  }

  changeState(id: number): void {
    this.getTasksList();
    this.tasksList.forEach((e: Task) =>
      (e.id === id) ? (e.isCompleted = !e.isCompleted) : false)
    this.setTasksList();
  }

  editTask(id: number, newValue: string) {
    this.getTasksList();
    this.tasksList.forEach((e: Task) => {
      e.id === id ? e.txt = newValue : false;
    })
    this.setTasksList()
  }

  private getTasksList(): void {
    this.tasksList = JSON.parse(localStorage.getItem('tasksList')!)
  }

  private setTasksList(): void {
    localStorage.setItem('tasksList', JSON.stringify(this.tasksList))
  }

}
