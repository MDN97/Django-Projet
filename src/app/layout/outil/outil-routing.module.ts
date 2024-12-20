import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OutilComponent} from './outil.component';

const routes: Routes = [
    {
        path: '',
        component: OutilComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OutilRoutingModule {}
