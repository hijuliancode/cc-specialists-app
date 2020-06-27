import { Component, OnInit, Input } from '@angular/core'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Specialist } from 'src/app/models/specialist.model';

@Component({
  selector: 'app-specialist-info',
  templateUrl: './specialist-info.component.html',
  styleUrls: ['./specialist-info.component.scss']
})
export class SpecialistInfoComponent implements OnInit {

  @Input() specialist : Specialist;

  faMapMarkerAlt = faMapMarkerAlt;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
