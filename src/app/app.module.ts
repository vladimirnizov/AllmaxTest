import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatIconModule,MatButtonModule,
MatCardModule,MatDatepickerModule, MatDialogModule, 
MatDividerModule, MatFormFieldModule,MatInputModule, 
MatNativeDateModule,MatSnackBarModule,MatTooltipModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskDisplayComponent } from './components/task-display/task-display.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDisplayComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDividerModule
    ],
  entryComponents:[EditDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
