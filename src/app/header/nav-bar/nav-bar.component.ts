import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  CourseList: any;

<<<<<<< HEAD
  // Subjects: any[] = [
  //   { title: 'Maths' },
  //   { title: 'English'},
  //   { title: 'Hindi' },
  // ];
  
  // onSubject(a : string){
  // alert( a + " " + "hiiii")
  //   }

  constructor() { }
=======
  constructor(private courseService: CourseServiceService) { }
>>>>>>> 24c72c64388c56fe9f67aa0225e24b57726e7179

  ngOnInit(): void {
    this.courseService.getAllCourse().subscribe(res=>{
      this.CourseList = res.data
    })
  }

}
