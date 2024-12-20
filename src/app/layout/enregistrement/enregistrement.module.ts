import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnregistrementComponent } from './enregistrement.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EnregistrementRoutingModule} from './enregistrement-routing.module';



@NgModule({
    declarations: [
        EnregistrementComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EnregistrementRoutingModule
    ]
})
export class EnregistrementModule { }
