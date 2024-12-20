import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceComponent } from './absence.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AbsenceRoutingModule} from './absence-routing.module';



@NgModule({
    declarations: [
       AbsenceComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AbsenceRoutingModule
    ]
})
export class AbsenceModule { }
