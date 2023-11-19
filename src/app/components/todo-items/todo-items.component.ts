import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../modules/Todo';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.scss',
})
export class TodoItemsComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string =''

  constructor () {

  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'my surename',
        completed: true
      },
      {
        content: 'somebodys chmo!',
        completed: false
      }
    ] 
  }

  toggleCompletion(id: number): void {
    this.todos.map((todoItem, index) => {
      if(index === id) todoItem.completed = !todoItem.completed

      return todoItem
    })
  }
  
  deleteItemTodo(id: number): void {
    this.todos = this.todos.filter((element, index) => index !== id)
  }
  addItem(event: Event): void {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
      }
}
