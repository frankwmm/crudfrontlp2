import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Curso} from '../../../models/curso';


@Component({
  selector: 'app-cursolist',
  templateUrl: './cursolist.component.html',
  styleUrls: ['./cursolist.component.css']
})
export class CursoListComponent implements OnInit {
 @Input() cursos: Curso[];
 @Output() onNew: EventEmitter<boolean> = new EventEmitter();
 @Output() onDelete: EventEmitter<number> = new EventEmitter();
 @Output() onEdit: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public delete (id: number): void {
    this.onDelete.emit(id);

  }

  public newCurso(): void {
    console.log("Lista");
    this.onNew.emit(true);
  }

  public edit (id: number): void {
    this.onEdit.emit(id);

  }

}
