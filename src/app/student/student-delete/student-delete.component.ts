import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_model/student';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit, OnChanges {
  @Input()
  id: number = 20;
  std: Student = new Student(0, "", 0);
  constructor(public stdser: StudentService) { }
  ngOnChanges(changes: SimpleChanges) {

    this.std = this.stdser.getStudentById(this.id);

  }
  ngOnInit(): void {

  }
  deleteStd() {
    this.stdser.deleteStudent(this.std)
  }

}
