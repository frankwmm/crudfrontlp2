import { Component, OnInit } from "@angular/core";
import { AlumnoService } from "../../../../../providers/alumno/alumno.service";
import { Alumno } from "../../models/alumno";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AlumnoNewComponent } from "../../components/forms/alumno-new/alumno-new.component";
import { AlumnoEditComponent } from "../../components/forms/alumno-edit/alumno-edit.component";

@Component({
  selector: "app-alumno",
  templateUrl: "./alumno.component.html",
  styleUrls: ["./alumno.component.css"],
})
export class AlumnoComponent implements OnInit {
  error: string;
  alumnos: Alumno[];
  alumno: Alumno;

  constructor(
    private alumnoService: AlumnoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getAlumno();
  }

  getAlumno(): void {
    this.alumnoService.getAlumno().subscribe(
      (response) => {
        this.alumnos = response.data;
        console.log(this.alumnos);
      },
      (error) => {
        this.error = error;
      }
    );
  }

  public onNewAlumno($event): void {
    if ($event) {
      const alumnoForm = this.modalService.open(AlumnoNewComponent, {
        size: "lg",
      });
      alumnoForm.componentInstance.title = "AGREGAR NUEVO ALUMNO";
      alumnoForm.result.then((result) => {
        this.alumnoService.postAlumno(result).subscribe(
          (response) => {
            if (response.success) {
              this.getAlumno();
            }
          },
          (error) => {
            this.error = error;
          }
        );
      });
    }
  }

  public delete(id: number): void {
    this.alumnoService.deleteAlumno(id).subscribe(
      (response) => {
        if (response.success) {
          this.getAlumno();
        }
      },
      (error) => {
        this.error = error;
      }
    );
  }

  edit(id: number): void {
    this.alumnoService.getAlumnoById(id).subscribe(
      (response) => {
        this.alumno = response.data;

        const alumnoForm = this.modalService.open(AlumnoEditComponent, {
          size: "lg",
        });
        alumnoForm.componentInstance.title = "EDITAR ALUMNO";
        alumnoForm.componentInstance.alumno = this.alumno;
        alumnoForm.result.then((result) => {
          if (result) {
            this.alumnoService.updateAlumno(this.alumno.id, result).subscribe(
              (resp) => {
                if (resp.success) {
                  this.getAlumno();
                }
              },
              (error) => {
                this.error = error;
              }
            );
          }
          console.log(result);
        });
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
