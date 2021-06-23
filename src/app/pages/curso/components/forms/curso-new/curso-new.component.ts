import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-curso-new',
  templateUrl: './curso-new.component.html',
  styleUrls: ['./curso-new.component.css']
})
export class CursoNewComponent implements OnInit {
  cursoForm: FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object> = new EventEmitter();


  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.cursoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      detalle: ['', [Validators.required]]
    });

   }

  ngOnInit(): void {
  }

  public save(): void {
    if (this.cursoForm.valid) {
      this.activeModal.close(this.cursoForm.value);
    }

  }

}
