import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../Services/course-service.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
SubjectList:any
constructor(private courseService: CourseServiceService) { }

ngOnInit(): void {
  this.courseService.getAllSubject().subscribe(res=>{
    this.SubjectList = res.data
  })
}



}
