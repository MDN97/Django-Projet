import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OutilComponent} from './outil.component';
import {ReactiveFormsModule} from '@angular/forms';
import {OutilRoutingModule} from './outil-routing.module';


@NgModule({
    declarations: [
        OutilComponent,

    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OutilRoutingModule
    ]
})
export class OutilModule {
}
