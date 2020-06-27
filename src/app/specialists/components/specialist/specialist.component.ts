import { Component, OnInit } from '@angular/core';

import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss']
})
export class SpecialistComponent implements OnInit {

  faClock = faClock;
  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
