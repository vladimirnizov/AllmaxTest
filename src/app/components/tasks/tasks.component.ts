import { Component, OnInit} from '@angular/core';
import {Task} from '../../models/Task.model'
import {MatDialog} from '@angular/material';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component'

const data: Array<Task> = [new Task('title1','descr','regular',new Date(2020,1,1), new Date(2020,1,1).toLocaleString().slice(0, 10).split('/').reverse().join('-'),null), 
                           new Task('title2','descrip','important',new Date(2020,1,1), new Date(2020,1,1).toLocaleString().slice(0, 10).split('/').reverse().join('-'),null), 
                           new Task('title3','des','very important',new Date(2020,1,1), new Date(2020,1,1).toLocaleString().slice(0, 10).split('/').reverse().join('-'),null)];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  currentTask : Task;
  tasks: Array<Task>

  constructor(private dialog: MatDialog) { 
    if(localStorage.getItem("dataLocal")==null){
    localStorage.setItem("dataLocal", JSON.stringify(data))
    }
  }

  ngOnInit() {
    this.showAll();
  }


  add() {
    const dislogRef = this.dialog.open(EditDialogComponent, {});
    dislogRef.afterClosed().subscribe((task) => {
        if(task){
        this.tasks.push(task);
        localStorage.setItem("dataLocal", JSON.stringify(this.tasks))
        }
    });
  }

  showAll() {
    this.tasks=new Array<Task>();
    JSON.parse(localStorage.getItem("dataLocal")).forEach(element => {
      this.tasks.push(new Task(element._title, element._description, element._rate, element._deadLineDate, element._deadLine, element._finishDay))
    });
  }

  showChoosed(chosed:string){
    this.tasks=new Array<Task>();
    JSON.parse(localStorage.getItem("dataLocal")).forEach(element => {
      if(element._rate==chosed){
      this.tasks.push(new Task(element._title, element._description, element._rate, element._deadLineDate,  element._deadLine, element._finishDay))
      }
    });
  }

  del(ind:number) {
    this.tasks.splice(ind, 1);
    localStorage.setItem("dataLocal", JSON.stringify(this.tasks))
  }

end(ind:number){
  this.tasks[ind].finishDay=new Date;
  localStorage.setItem("dataLocal", JSON.stringify(this.tasks))
}

edit(ind:number){
  const dislogRef = this.dialog.open(EditDialogComponent, {data: this.tasks[ind]});
  dislogRef.afterClosed().subscribe((task) => {
      if(task){
      this.tasks[ind]=task;
      localStorage.setItem("dataLocal", JSON.stringify(this.tasks))
      }
  });

}
  

}
