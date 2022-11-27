import { Component, Input, OnInit, Testability } from '@angular/core';
import { courseTeacher } from 'src/app/models/courseTeacher';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-course-teacher-details',
  templateUrl: './course-teacher-details.component.html',
  styleUrls: ['./course-teacher-details.component.css']
})
export class CourseTeacherDetailsComponent implements OnInit {
  
  
  @Input() courseTeacherDTO: courseTeacher ={
    course:'',
    teacher:''
  }
  constructor(private studentService: StudentService,) { }

  ngOnInit(): void {
  }

}
