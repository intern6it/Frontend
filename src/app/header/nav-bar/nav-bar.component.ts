import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // Subjects: any[] = [
  //   { title: 'Maths' },
  //   { title: 'English'},
  //   { title: 'Hindi' },
  // ];
  
  // onSubject(a : string){
  // alert( a + " " + "hiiii")
  //   }

  constructor() { }

  ngOnInit(): void {
  }

}
