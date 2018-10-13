import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Task} from '../../models/Task.model'

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  rates: any[] = [
    {value: 'regular'},
    {value: 'important'},
    {value: 'very important'}
  ];

  form: FormGroup;
  
  constructor(private thisDialog: MatDialogRef<EditDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public task: Task) { }

  ngOnInit() {
    this.checkErrors();
  }

  checkErrors(){
    const title = this.task ? this.task.title : '';
    const description = this.task ? this.task.description : '';
    const rate = this.task ? this.task.rate : '';
    const deadLine = this.task ? this.task.deadLine : '';
    this.form = new FormGroup({
      'title': new FormControl(title, [Validators.required]),
      'description': new FormControl(description, [Validators.required]),
      'rate': new FormControl(rate, [Validators.required]),
      'deadLine': new FormControl(deadLine, [Validators.required])
    });
  }


  save() {
  const task = new Task(this.form.get('title').value, 
                        this.form.get('description').value, 
                        this.form.get('rate').value,
                        this.form.get('deadLine').value, 
                        this.form.get('deadLine').value.toLocaleString().slice(0, 10).split('/').reverse().join('-'), 
                        null) 

  this.thisDialog.close(task);
  }


}