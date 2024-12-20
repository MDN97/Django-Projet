import {Component, OnInit} from '@angular/core';
import {CoursService} from '../../shared/services/cours.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-cours',
    templateUrl: './cours.component.html',
    styleUrls: ['./cours.component.css'],
    animations: [routerTransition()]
})
export class CoursComponent implements OnInit {
    cours: any[] = [];
    coursForm: FormGroup;

    constructor(private coursService: CoursService, private fb: FormBuilder, private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.coursForm = this.fb.group({
            id: [],
            Nom: [],
            Du: [],
            Type: [],
        });
        this.getAllCours();
    }

    getAllCours() {
        this.coursService.getAll().subscribe(r => {
            this.cours = r;
        });
    }

    open(content) {
        this.coursForm.reset();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
    }

    delete(idd) {
        this.coursService.delete(idd).subscribe(() => {
            this.cours = this.cours.filter(u => u.id != idd);
        });
    }

    edit(s: any, content) {
        this.coursForm.controls.id.setValue(s.id);
        this.coursForm.controls.Nom.setValue(s.Nom);
        this.coursForm.controls.Du.setValue(s.Du);
        this.coursForm.controls.Type.setValue(s.Type);
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
    }

    save() {
        const form = this.coursForm.value;
        const obj = {
            id: form.id,
            Nom: form.Nom,
            Du: form.Du,
            Type: form.Type

        };
        if (form.id != null) {
            this.coursService.update(form.id, form).subscribe(u => {
                this.getAllCours();
            });
        } else {
            this.coursService.save(form).subscribe(u => {
                this.getAllCours();
            });
        }


    }
}
