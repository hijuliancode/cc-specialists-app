import { Component, OnInit } from '@angular/core'

import { Specialist } from 'src/app/models/specialist.model'
import shortid from "shortid"

@Component({
  selector: 'app-specialist-info',
  templateUrl: './specialist-info.component.html',
  styleUrls: ['./specialist-info.component.scss']
})
export class SpecialistInfoComponent implements OnInit {

  specialist:Specialist = {
    id: shortid.generate(),
    image: 'https://i.pravatar.cc?img=5',
    prefix: 'Dra.',
    name: 'Maria José Dominguez',
    career: 'Especialista en Pediatria',
    rate: 4,
    location: 'CL. 123 #7-60 Edificio Medical Center',
  }

  constructor() { }

  ngOnInit(): void {
  }
}
