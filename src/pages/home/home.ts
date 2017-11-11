// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import todos from '../../data/todos'; // TODO: vs { todos }
import { TodoPage } from '../todo/todo' // TODO: export deafult

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
// export class HomePage implements onInit {
export class HomePage {
  todos: {
    id: number,
    title: string,
    description: string,
    complete: boolean
  }[];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.todos = todos;
  }

  openTodoPage(todoId) {
    // ionic navation: push, pop(not ui-router)
    this.navCtrl.push(TodoPage, { id: todoId });

  }

}
