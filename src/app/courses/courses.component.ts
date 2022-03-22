import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CourseServiceService } from '../Services/course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courseId:any;
  CourseList:any 
  constructor(private courseService: CourseServiceService) { }
  courseSelect:boolean=false;
  Course!: string;
  @Output() courseIdSelect = new EventEmitter<number>();
  ngOnInit(): void {
    this.courseService.getAllCourse().subscribe(res=>{
      this.CourseList = res.data
    })
  }


  CourseSelected(course:number){
    this.courseIdSelect.emit(course)
    // this.courseSelect=true;
    // this.Course=course;
  }
}
