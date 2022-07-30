import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_model/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit, OnChanges {
  @Input()
  id: number = 20;
  std: Student = new Student(0, "", 0);
  constructor(public stdser: StudentService) { }
  ngOnChanges(changes: SimpleChanges) {

    this.std = this.stdser.getStudentById(this.id);

  }
  ngOnInit(): void { }
  update() {
    this.stdser.flag = !this.stdser.flag;
    this.stdser.updateStudent(this.std);
  }

}
