import { Injectable } from '@angular/core';
import shortid from 'shortid';
import { Specialist } from 'src/app/models/specialist.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialistsService {

  demoSpecialist:Specialist = {
    id: shortid.generate(),
    image: 'https://i.pravatar.cc?img=5',
    prefix: 'Dra.',
    name: 'María José Dominguez',
    career: 'Especialista en Pediatría',
    rate: 4,
    location: 'Cl. 123 #7-60 Edificio Medical Center',
    availability: new Date(),
    detail: {
      description: 'El doctor Juan Pablo Riveros tiene más de 25 años de experiencia como Cardiólogo e Internista, su énfasis ha sido la prevención y el tratamiento de todo tipo de enfermedades cardiovasculares y metabólicas como la diabetes, el sobrepeso y los factores de riesgo asociados.',
      specialities: [
        'Cirugía cardiovascular',
        'Electrocardiograma',
        'Hipertensión',
        'Insuficiencia cardíaca'
      ]
    }
  }

  constructor() { }

  getAllSpecialists() {
    return [this.demoSpecialist];
  }
}
