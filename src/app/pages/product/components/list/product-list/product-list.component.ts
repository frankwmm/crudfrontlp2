import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onNew: EventEmitter<boolean> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onEdit: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  public newProduct(): void {
    this.onNew.emit(true);
  }

  public delete(id: number): void {
    this.onDelete.emit(id);
  }

  public edit(id: number): void {
    this.onEdit.emit(id);
  }
}
