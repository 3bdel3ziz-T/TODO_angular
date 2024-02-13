import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import { FilterTasksComponent } from './components/filter-tasks/filter-tasks.component';
import { ClearAllComponent } from './components/clear-all/clear-all.component';
import { NgToastModule } from 'ng-angular-popup';
@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    AddToDoComponent,
    FilterTasksComponent,
    ClearAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
