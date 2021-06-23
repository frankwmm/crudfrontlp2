import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Permiso} from '../../../models/permiso';

@Component({
  selector: 'app-permiso-edit',
  templateUrl: './permiso-edit.component.html',
  styleUrls: ['./permiso-edit.component.css']
})
export class PermisoEditComponent implements OnInit {

  @Input() permiso: Permiso;
  @Input() title: string;
  permisoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.permisoForm = this.formBuilder.group({
      nom_permiso: [''],
      desc_permiso: ['']
    });
  }

  ngOnInit(): void {
    if (this.permiso) {
      console.log(this.permiso);
      this.permisoForm.patchValue({
        nom_permiso: this.permiso.nom_permiso,
        desc_permiso: this.permiso.desc_permiso
      });
    }

  }

  public edit(): void {
    if (this.permisoForm.valid) {
      this.activeModal.close(this.permisoForm.value);
    }

  }

}
