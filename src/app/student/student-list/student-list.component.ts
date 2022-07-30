import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],

})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  editIDToSend: number = 1;


  constructor(public stdser: StudentService) {

    this.students = stdser.getAllStudents();
  }

  ngOnInit(): void {
  }
  pushStudent(event: Student) {
    this.students.push(new Student(event.id, event.name, event.age));

  }
  getID(editID: number) {
    this.stdser.flag = !this.stdser.flag;
    this.editIDToSend = editID;


  }

}
