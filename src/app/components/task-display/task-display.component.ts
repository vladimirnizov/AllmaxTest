import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../models/Task.model'
import * as moment from 'moment';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.css']
})
export class TaskDisplayComponent implements OnInit {
  @Input() currentTask: Task;
  @Input() ind: number;
  @Output('del') del = new EventEmitter();
  @Output('end') end = new EventEmitter();
  @Output('edit') edit = new EventEmitter();
  today = new Date();
  detail= false;

  expired: boolean;

  constructor() { 
  }

  ngOnInit() {
    this.expired = moment(this.currentTask.deadLineDate).isBefore(this.today)
  }

  showDetail(){
    this.detail=!this.detail;
    
  }

  delete() {
     this.del.emit(this.ind);
  }

  finish(){
    this.end.emit(this.ind);
  }

  editTask(){
    this.edit.emit(this.ind);
  }
}
