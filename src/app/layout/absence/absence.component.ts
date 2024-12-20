import { Component, OnInit } from '@angular/core';
import { AbsenceService } from '../../shared/services/absence.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-cours',
    templateUrl: './absence.component.html',
    styleUrls: ['./absence.component.css'],
    animations: [routerTransition()]
})
export class AbsenceComponent implements OnInit {
    absence: any[] = [];
    absenceForm: FormGroup;

    constructor(private absenceService: AbsenceService, private fb: FormBuilder, private modalService: NgbModal) {}

    ngOnInit(): void {
        this.absenceForm = this.fb.group({
            id: [],
            Motif: [],

            etudiant_id: []
        });
        this.getAllAbsence();
    }

    getAllAbsence() {
        this.absenceService.getAll().subscribe((r) => {
            this.absence = r;
        });
    }

    open(content) {
        this.absenceForm.reset();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true });
    }

    delete(idd) {
        this.absenceService.delete(idd).subscribe(() => {
            this.absence = this.absence.filter((u) => u.id != idd);
        });
    }

    edit(s: any, content) {
        this.absenceForm.controls.id.setValue(s.id);
        this.absenceForm.controls.Motif.setValue(s.Motif);
        this.absenceForm.controls.etudiant_id.setValue(s.etudiant_id);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true });
    }

    save() {
        const form = this.absenceForm.value;
        const obj = {
            id: form.id,
            Motif: form.Motif,
            etudiant: form.etudiant_id
        };
        if (form.id != null) {
            this.absenceService.update(form.id, form).subscribe((u) => {
                this.getAllAbsence();
            });
        } else {
            this.absenceService.save(obj).subscribe((u) => {
                this.getAllAbsence();
            });
        }
    }
}
