import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupeComponent} from './groupe.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GroupeRoutingModule} from './groupe-routing.module';


@NgModule({
    declarations: [
        GroupeComponent,

    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        GroupeRoutingModule
    ]
})
export class GroupeModule {
}
