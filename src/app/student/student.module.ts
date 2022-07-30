import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { FormsModule } from '@angular/forms';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentDeleteComponent
  ],
  imports: [
    CommonModule, FormsModule
  ], exports: [
    StudentAddComponent, StudentListComponent
  ]
})
export class StudentModule { }
