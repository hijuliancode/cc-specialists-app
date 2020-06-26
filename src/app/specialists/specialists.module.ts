import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialistsRoutingModule } from './specialists-routing.module';
import { SpecialistsComponent } from './components/specialists/specialists.component';
import { SpecialistComponent } from './components/specialist/specialist.component';
import { SpecialistDetailComponent } from './components/specialist-detail/specialist-detail.component';
import { SpecialistInfoComponent } from './components/specialist-info/specialist-info.component';


@NgModule({
  declarations: [SpecialistsComponent, SpecialistComponent, SpecialistDetailComponent, SpecialistInfoComponent],
  imports: [
    CommonModule,
    SpecialistsRoutingModule
  ]
})
export class SpecialistsModule { }
