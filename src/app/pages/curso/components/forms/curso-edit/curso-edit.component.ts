import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Curso} from '../../../models/curso';

@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})
export class CursoEditComponent implements OnInit {
  @Input() curso: Curso;
  @Input() title: string;
  cursoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.cursoForm = this.formBuilder.group({
      nombre: [''],
      detalle: ['']
    });
  }

  ngOnInit(): void {
    if (this.curso) {
      console.log(this.curso);
      this.cursoForm.patchValue({
        nombre: this.curso.nombre,
        detalle: this.curso.detalle
      });
    }

  }

  public edit(): void {
    if (this.cursoForm.valid) {
      this.activeModal.close(this.cursoForm.value);
    }

  }

}
