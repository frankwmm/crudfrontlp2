import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Alumno } from "../../../models/alumno";

@Component({
  selector: "app-alumno-list",
  templateUrl: "./alumno-list.component.html",
  styleUrls: ["./alumno-list.component.css"],
})
export class AlumnoListComponent implements OnInit {
  @Input() alumnos: Alumno[];
  @Output() onNew: EventEmitter<boolean> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onEdit: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public newAlumno(): void {
    this.onNew.emit(true);
  }

  public delete(id: number): void {
    this.onDelete.emit(id);
  }

  public edit(id: number): void {
    this.onEdit.emit(id);
  }
}
