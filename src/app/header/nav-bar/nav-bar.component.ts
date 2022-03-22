import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  CourseList: any;

  constructor(private courseService: CourseServiceService) { }

  ngOnInit(): void {
    this.courseService.getAllCourse().subscribe(res=>{
      this.CourseList = res.data
    })
  }

}
