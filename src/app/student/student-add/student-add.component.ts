import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_model/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
})
export class StudentAddComponent implements OnInit {
  studentObj: Student = new Student(0, "", 0);


  @Output()
  studentAdd: EventEmitter<Student> = new EventEmitter<Student>();
  constructor(public stdser: StudentService) { }

  ngOnInit(): void {
  }
  submit() {
    this.stdser.addStudent(this.studentObj);
    console.log(this.stdser.getAllStudents());

  }
}
