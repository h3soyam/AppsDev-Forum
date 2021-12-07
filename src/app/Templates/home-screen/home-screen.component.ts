import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent implements OnInit {
  @Input() profile;
  constructor() {}

  ngOnInit(): void {}
}
