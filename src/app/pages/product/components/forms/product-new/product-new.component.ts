import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  productForm: FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      detail: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public save(): void {
    if (this.productForm.valid) {
      this.activeModal.close(this.productForm.value);
    }

  }

}
