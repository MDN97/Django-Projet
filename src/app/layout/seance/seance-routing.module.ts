import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeanceComponent} from './seance.component';

const routes: Routes = [
    {
        path: '',
        component: SeanceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeanceRoutingModule {}
