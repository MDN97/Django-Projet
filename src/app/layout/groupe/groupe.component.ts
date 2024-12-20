import {Component, OnInit} from '@angular/core';
import {GroupeService} from '../../shared/services/groupe.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-cours',
    templateUrl: './groupe.component.html',
    styleUrls: ['./groupe.component.css'],
    animations: [routerTransition()]
})
export class GroupeComponent implements OnInit {
    groupe: any[] = [];
    groupeForm: FormGroup;

    constructor(private groupeService: GroupeService, private fb: FormBuilder, private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.groupeForm = this.fb.group({
            id: [],
            Nom: [],
            Prenom: [],
            Nombre_etud: [],
            Niveau: []
        });
        this.getAllGroupe();
    }

    getAllGroupe() {
        this.groupeService.getAll().subscribe(r => {
            this.groupe = r;
        });
    }

    open(content) {
        this.groupeForm.reset();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
    }

    delete(idd) {
        this.groupeService.delete(idd).subscribe(() => {
            this.groupe = this.groupe.filter(u => u.id != idd);
        });
    }

    edit(s: any, content) {
        this.groupeForm.controls.id.setValue(s.id);
        this.groupeForm.controls.Nom.setValue(s.Nom);
        this.groupeForm.controls.Nombre_etud.setValue(s.Nombre_etud);
        this.groupeForm.controls.Niveau.setValue(s.Niveau);
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
    }

    save() {


        const form = this.groupeForm.value;
        const obj = {
            id: form.id,

            Nom: form.Nom,

            Prenom: form.Prenom,
            Nombre_etud: form.Nombre_etud,
            Niveau: form.Niveau

        };
        if (form.id != null) {
            this.groupeService.update(form.id, obj).subscribe(u => {
                this.getAllGroupe();
            });
        } else {
            this.groupeService.save(this.groupeForm.value).subscribe(u => {
                this.getAllGroupe();
            });
        }
    }
}

