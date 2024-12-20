import { Component, OnInit } from '@angular/core';
import { EnregistrementService } from '../../shared/services/enregistrement.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-cours',
    templateUrl: './enregistrement.component.html',
    styleUrls: ['./enregistrement.component.css'],
    animations: [routerTransition()]
})
export class EnregistrementComponent implements OnInit {
    enregistrement: any[] = [];
    enregistrementForm: FormGroup;

    constructor(
        private groupeService: EnregistrementService,
        private fb: FormBuilder,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.enregistrementForm = this.fb.group({
            id: [],
            Nom: [],
            Chemin: [],
            Type: [],
            niveau: [],
            seance: []
        });
        this.getAllEnregistrement();
    }

    getAllEnregistrement() {
        this.groupeService.getAll().subscribe((r) => {
            this.enregistrement = r;
        });
    }

    open(content) {
        this.enregistrementForm.reset();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true });
    }

    delete(idd) {
        this.groupeService.delete(idd).subscribe(() => {
            this.enregistrement = this.enregistrement.filter((u) => u.id != idd);
        });
    }

    edit(s: any, content) {
        this.enregistrementForm.controls.id.setValue(s.id);
        this.enregistrementForm.controls.Nom.setValue(s.Nom);
        this.enregistrementForm.controls.Chemain.setValue(s.Chemain);
        this.enregistrementForm.controls.Type.setValue(s.Type);
        this.enregistrementForm.controls.niveau.setValue(s.niveau);
        this.enregistrementForm.controls.seance_id.setValue(s.seance_id);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true });
    }

    save() {
        const form = this.enregistrementForm.value;
        const obj = {
            id: form.id,
            Nom: form.Nom,
            Chemin: form.Chemin,
            Type: form.Type,
            Niveau: form.Niveau
        };
        if (form.id != null) {
            this.groupeService.update(form.id, obj).subscribe((u) => {
                this.getAllEnregistrement();
            });
        } else {
            this.groupeService.save(this.enregistrementForm.value).subscribe((u) => {
                this.getAllEnregistrement();
            });
        }

        this.groupeService.save(this.enregistrementForm.value).subscribe((u) => {
            this.getAllEnregistrement();
        });
    }
}
