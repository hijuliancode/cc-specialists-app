import { Component, OnInit } from '@angular/core';

import { Specialist } from 'src/app/models/specialist.model'
import { SpecialistsService } from 'src/app/core/services/specialists/specialists.service';

import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss']
})
export class SpecialistComponent implements OnInit {

  faClock = faClock;
  today = new Date();

  specialists: Specialist[] = [];

  constructor(
    private specialistsService: SpecialistsService
  ) { }

  ngOnInit(): void {
    this.fetchSpecialists()
  }

  fetchSpecialists() {
    this.specialists = this.specialistsService.getAllSpecialists();
    console.log('this.specialists', this.specialists)
  }
}
