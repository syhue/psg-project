import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from '../layouts/admin-layout/admin-layout.routing';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(AdminLayoutRoutes)
    ],
    exports: [
        NavbarComponent,
    ]
})
export class ComponentsModule { }
