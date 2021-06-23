import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-permiso-new',
  templateUrl: './permiso-new.component.html',
  styleUrls: ['./permiso-new.component.css']
})
export class PermisoNewComponent implements OnInit {
  permisoForm: FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object> = new EventEmitter();


  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.permisoForm = this.formBuilder.group({
      nom_permiso: ['', [Validators.required]],
      desc_permiso: ['', [Validators.required]]
    });

   }

  ngOnInit(): void {
  }

  public save(): void {
    if (this.permisoForm.valid) {
      this.activeModal.close(this.permisoForm.value);
    }

  }

}