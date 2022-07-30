import { Injectable } from '@angular/core';
import { Student } from '../_model/student';

// @Injectable({
//   providedIn: 'root',

// })
export class StudentService {
  private students: Student[] = [
    new Student(1, 'mohamed', 30),
    new Student(2, 'Ahmed', 20),
    new Student(3, 'mostafa', 25),
  ];
  flag = false;

  constructor() { }

  getAllStudents() {
    return this.students;
  }
  addStudent(std: Student) {
    this.students.push(new Student(std.id, std.name, std.age));
  }
  getStudentById(id: number) {

    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === id) {
        return new Student(this.students[i].id, this.students[i].name, this.students[i].age);
      }
    }
    return new Student(0, "", 11);
  }
  updateStudent(std: Student) {
    this.students.forEach(student => {
      if (student.id === std.id) {
        student.name = std.name;
        student.age = std.age;
        return;
      }
    });
  }
  deleteStudent(std: Student): void {
    this.students.forEach((student, index) => {
      if (student.id === std.id) {
        this.students.splice(index, 1);
      }
    });
  }
}
