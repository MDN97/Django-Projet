import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../shared/services/student.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {routerTransition} from '../../router.animations';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CoursService} from '../../shared/services/cours.service';
import {TeacherService} from '../../shared/services/teacher.service';
import {forkJoin} from 'rxjs';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css'],
    animations: [routerTransition()]
})
export class StudentComponent implements OnInit {
    students: any[] = [];
    studentForm: FormGroup;
    cours: any[] = [];
    teachers: any[] = [];

    constructor(private studentService: StudentService, private modalService: NgbModal, private fb: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.studentForm = this.fb.group({
            id: [],
            Nom: [],
            Prenom: [],
            Etat: [],
            groupe: [],
            Adr_mail: []
        });
        this.getAllStudents();
    }

    getAllStudents() {
        this.studentService.getAll().subscribe((r: any) => {
            this.students = r;
        });
    }

    open(content) {
        this.studentForm.reset();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
        /*.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });*/
    }

    save() {
        const form = this.studentForm.value;
        const obj = {
            id: form.id,
            Prenom: form.Prenom,
            Nom: form.Nom,
            groupe: form.groupe,
            Adr_mail: form.Adr_mail,
            Etat: form.Etat

        };
        if (form.id != null) {
            this.studentService.update(form.id, obj).subscribe(u => {
                this.getAllStudents();
            });
        } else {
            this.studentService.save(obj).subscribe(u => {
                this.getAllStudents();
            });

        }
    }

    delete(id: any) {
        this.studentService.delete(id).subscribe(() => {
            this.students = this.students.filter(u => u.id != id);
        });
    }

    edit(s: any, content) {
        this.studentForm.controls.id.setValue(s.id);
        this.studentForm.controls.Prenom.setValue(s.Prenom);
        this.studentForm.controls.Nom.setValue(s.Nom);
        this.studentForm.controls.groupe.setValue(s.groupe);
        this.studentForm.controls.Adr_mail.setValue(s.Adr_mail);
        this.studentForm.controls.Etat.setValue(s.Etat);
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
    }
}
