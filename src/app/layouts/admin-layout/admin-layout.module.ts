import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductComponent} from "../../pages/product/container/product/product.component";
import {ProductNewComponent} from "../../pages/product/components/forms/product-new/product-new.component";
import {ProductEditComponent} from "../../pages/product/components/forms/product-edit/product-edit.component";
import {ProductListComponent} from "../../pages/product/components/list/product-list/product-list.component";
import {ProductsService} from "../../../providers/products/products.service";
import { CursoComponent } from '../../pages/curso/container/curso/curso.component';
import { CursoListComponent } from '../../pages/curso/components/list/cursolist/cursolist.component';
import { CursoEditComponent } from '../../pages/curso/components/forms/curso-edit/curso-edit.component';
import { CursoNewComponent } from '../../pages/curso/components/forms/curso-new/curso-new.component';
import { CursoService } from 'src/providers/curso/curso.service';

import { PermisoComponent } from '../../pages/permiso/container/permiso/permiso.component';
import { PermisoListComponent } from '../../pages/permiso/components/list/permisolist/permisolist.component';
import { PermisoEditComponent } from '../../pages/permiso/components/forms/permiso-edit/permiso-edit.component';
import { PermisoNewComponent } from '../../pages/permiso/components/forms/permiso-new/permiso-new.component';
import { PermisoService } from 'src/providers/permiso/permiso.service';


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ClipboardModule,
        ReactiveFormsModule
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    ProductComponent,
    ProductNewComponent,
    ProductEditComponent,
    ProductListComponent,
    CursoComponent,
    CursoListComponent,
    CursoEditComponent,
    CursoNewComponent,
    PermisoComponent,
    PermisoListComponent,
    PermisoEditComponent,
    PermisoNewComponent,


  ], providers: [ProductsService, CursoService, PermisoService]
})


export class AdminLayoutModule {
}
