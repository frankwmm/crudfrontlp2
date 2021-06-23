import { Component,Input, OnInit, Output, EventEmitter  } from '@angular/core';
import {Permiso} from '../../../models/permiso';

@Component({
  selector: 'app-permisolist',
  templateUrl: './permisolist.component.html',
  styleUrls: ['./permisolist.component.css']
})
export class PermisoListComponent implements OnInit {
  @Input() permisos: Permiso[];
  @Output() onNew: EventEmitter<boolean> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onEdit: EventEmitter<number> = new EventEmitter();
 

  constructor() { }

  ngOnInit(): void {
  }
  public delete (id: number): void {
    this.onDelete.emit(id);

  }

  public newPermiso(): void {
    console.log("Lista");
    this.onNew.emit(true);
  }

  public edit (id: number): void {
    this.onEdit.emit(id);

  }



}
