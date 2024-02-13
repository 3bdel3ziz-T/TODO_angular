import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent {
  clicked: boolean = false;
  @ViewChild('taskTxt') inputElRef!: ElementRef;
  @Output()
  EmitTaskTxt: EventEmitter<string> = new EventEmitter<string>

  constructor(private toastService: NgToastService) {
    document.addEventListener('keydown', () => this.inputElRef.nativeElement.focus())
    window.addEventListener('keydown', (e: KeyboardEvent) => e.code === "Enter" ? this.AddTask() : false
    )
  }

  AddTask(): void {
    if (this.inputElRef.nativeElement.value !== '') {
      this.clickEvent();
      this.EmitTaskTxt.emit(this.inputElRef.nativeElement.value);
      this.inputElRef.nativeElement.value = ''
    } else {
      this.toastService.info({
        detail: '',
        summary: 'field is empty! please write something.',
        position: 'topCenter',
        type: 'warning',
        duration: 2500
      })
    }
  }
  clickEvent() {
    this.clicked = true;
    setTimeout(() => this.clicked = false, 600)
  }
}
