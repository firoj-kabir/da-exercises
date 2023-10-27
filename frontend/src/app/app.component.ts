import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from './models/student.model';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  students: Student[] = [];

  studentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[- +()0-9 ]{11,14}'),
    ]),
  });

  constructor(private router: Router, private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe({
      next: (students: Student[]) => {
        this.students = students;
      },
    });
  }

  onSubmit() {
    if (!this.studentForm.valid) {
      return;
    }

    this.studentService.createStudentInfo(this.studentForm.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
    });
    this.studentForm.reset();
  }
}
