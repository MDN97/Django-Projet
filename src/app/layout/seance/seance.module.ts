import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeanceComponent } from './seance.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SeanceRoutingModule} from '../seance/seance-routing.module';



@NgModule({
  declarations: [
    SeanceComponent
  ],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      SeanceRoutingModule
  ]
})
export class SeanceModule { }
