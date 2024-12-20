import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'prefix'},

            {
                path: 'students',
                loadChildren: () => import('./student/student.module').then((m) => m.StudentModule)
            },
            {
                path: 'teachers',
                loadChildren: () => import('./teacher/teacher.module').then((m) => m.TeacherModule)
            },
            {
                path: 'cours',
                loadChildren: () => import('./cours/cours.module').then((m) => m.CoursModule)
            },
            {
                path: 'seance',
                loadChildren: () => import('./seance/seance.module').then((m) => m.SeanceModule)
            },
            {
                path: 'groupe',
                loadChildren: () => import('./groupe/groupe.module').then((m) => m.GroupeModule)
            },
            {
                path: 'absence',
                loadChildren: () => import('./absence/absence.module').then((m) => m.AbsenceModule)
            },
            {
                path: 'enregistrement',
                loadChildren: () => import('./enregistrement/enregistrement.module').then((m) => m.EnregistrementModule)
            }
            ,
            {
                path: 'outil',
                loadChildren: () => import('./outil/outil.module').then((m) => m.OutilModule)
            }
            ,
            {
                path: 'login',
                loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
            }


        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
