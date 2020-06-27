import { Component, OnInit, Input } from '@angular/core';
import { Specialist } from 'src/app/models/specialist.model';

@Component({
  selector: 'app-specialist-detail',
  templateUrl: './specialist-detail.component.html',
  styleUrls: ['./specialist-detail.component.scss']
})
export class SpecialistDetailComponent implements OnInit {
  @Input() specialist : Specialist;
  constructor() { }

  ngOnInit(): void {
  }

}
