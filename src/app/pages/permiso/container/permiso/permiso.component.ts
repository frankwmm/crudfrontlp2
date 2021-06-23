import { Component, OnInit } from "@angular/core";
import { PermisoService } from "src/providers/permiso/permiso.service";
import { Permiso } from "../../models/permiso";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PermisoNewComponent } from "../../components/forms/permiso-new/permiso-new.component";
import { PermisoEditComponent } from "../../components/forms/permiso-edit/permiso-edit.component";

@Component({
  selector: "app-permiso",
  templateUrl: "./permiso.component.html",
  styleUrls: ["./permiso.component.css"],
})
export class PermisoComponent implements OnInit {
  error: string;
  permisos: Permiso[];
  permiso: Permiso;

  constructor(
    private permisoService: PermisoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getPermiso();
  }

  getPermiso(): void {
    this.permisoService.getPermiso().subscribe(
      (response) => {
        this.permisos = response.data;
        console.log(this.permisos);
      },
      (error) => {
        this.error = error;
      }
    );
  }
  public delete(id: number): void {
    this.permisoService.deletePermiso(id).subscribe(
      (response) => {
        if (response.success) {
          this.getPermiso();
        }
      },
      (error) => {
        this.error = error;
      }
    );
  }

  public onNewPermiso($event): void {
    console.log("Nuevo Permiso");
    if ($event) {
      const permisoForm = this.modalService.open(PermisoNewComponent, {
        size: "lg",
      });
      permisoForm.componentInstance.title = "Nuevo permiso";
      permisoForm.result.then((result) => {
        this.permisoService.savePermiso(result).subscribe(
          (response) => {
            if (response.success) {
              this.getPermiso();
            }
          },
          (error) => {
            this.error = error;
          }
        );
      });
    }
  }

  edit(id: number): void {
    console.log("Editado");
    this.permisoService.getPermisoById(id).subscribe(
      (response) => {
        this.permiso = response.data;
        // console.log(this.permiso);
        const permisoForm = this.modalService.open(PermisoEditComponent, {
          size: "lg",
        });
        permisoForm.componentInstance.title = "Editar permiso";
        permisoForm.componentInstance.permiso = this.permiso;
        permisoForm.result.then((result) => {
          if (result) {
            this.permisoService
              .updatePermiso(this.permiso.id, result)
              .subscribe(
                (resp) => {
                  if (resp.success) {
                    this.getPermiso();
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
