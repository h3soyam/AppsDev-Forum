import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  postTitle = "How to Cook Adobo";
  constructor() { }

  ngOnInit(): void {
  }
   
}
