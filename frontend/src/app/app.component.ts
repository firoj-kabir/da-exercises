import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
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
  id = '';

  studentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[- +()0-9 ]{11,14}'),
    ]),
  });

  constructor(
    private router: Router,
    private studentService: StudentService,
    private toast: NgToastService
  ) {}

  ngOnInit() {
    this.studentService.getStudentsInfo().subscribe({
      next: (students: Student[]) => {
        this.students = students;
      },
    });
  }

  onSubmit() {
    if (!this.studentForm.valid) {
      this.toast.error({
        detail: 'Error!',
        summary: 'Invalid student information',
        duration: 3000,
      });
      return;
    }

    this.studentService.createStudentInfo(this.studentForm.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
        this.toast.success({
          detail: 'Success Message',
          summary: 'Student information added successfully!',
          duration: 3000,
        });
      },
    });
    this.studentForm.reset();
  }

  deleteStudent = (id: string) => {
    this.studentService.deleteStudentInfo(id).subscribe({
      next: () => {
        this.toast.warning({
          detail: 'Warning!',
          summary: 'Deleted student information!',
          duration: 3000,
        });
        this.students = this.students.filter((student) => student._id != id);
      },
    });
  };
}
