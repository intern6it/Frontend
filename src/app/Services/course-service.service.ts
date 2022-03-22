import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http:HttpClient) { }

  getAllCourse(){
      return this.http.get<any>("http://localhost:9090/course/list")
      .pipe(map((res:any)=>{
        return res
      }))
  }

  getAllSubject(){
    return this.http.get<any>("http://localhost:9090/subject/list")
    .pipe(map((res:any)=>{
      return res
    }))
}
}
