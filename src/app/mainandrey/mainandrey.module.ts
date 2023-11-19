import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { TodoItemsComponent } from '../components/todo-items/todo-items.component';
import { FormControl } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, TodoItemsComponent],
  imports: [
    CommonModule,
    NgModule,
    FormControl
  ]
})
export class MainandreyModule { }
