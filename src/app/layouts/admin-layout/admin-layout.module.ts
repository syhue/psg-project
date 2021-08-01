import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { AdminLayoutRoutes } from './admin-layout.routing';

@NgModule({
    declarations: [
        HomeComponent,

    ],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes)
    ],
    exports: [RouterModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class AdminLayoutModule { }
