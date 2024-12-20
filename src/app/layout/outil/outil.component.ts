import {Component, OnInit} from '@angular/core';
import {OutilService} from '../../shared/services/outil.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-cours',
    templateUrl: './outil.component.html',
    styleUrls: ['./outil.component.css'],
    animations: [routerTransition()]
})
export class OutilComponent implements OnInit {
    outil: any[] = [];
    outilForm: FormGroup;

    constructor(private outilService: OutilService, private fb: FormBuilder, private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.outilForm = this.fb.group({
            id: [],
            Nom: [],
            Type: []

        });
        this.getAllOutil();
    }

    getAllOutil() {
        this.outilService.getAll().subscribe(r => {
            this.outil = r;
        });
    }

    open(content) {
        this.outilForm.reset();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
    }

    delete(idd) {
        this.outilService.delete(idd).subscribe(() => {
            this.outil = this.outil.filter(u => u.id != idd);
        });
    }

    edit(s: any, content) {
        this.outilForm.controls.id.setValue(s.id);
        this.outilForm.controls.Nom.setValue(s.Nom);
        this.outilForm.controls.Type.setValue(s.Type);
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
    }

    save() {

        const form = this.outilForm.value;
        const obj = {
            id: form.id,

            Nom: form.Nom,

            Type: form.Type

        };
        if (form.id != null) {
            this.outilService.update(form.id, obj).subscribe(u => {
                this.getAllOutil();
            });
        } else {


            this.outilService.save(this.outilForm.value).subscribe(u => {
                this.getAllOutil();
            });
        }
    }
}
