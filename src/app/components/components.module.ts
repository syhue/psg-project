import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BlockUIModule } from 'ng-block-ui';
import { AdminLayoutRoutes } from '../layouts/admin-layout/admin-layout.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
    declarations: [
        NavbarComponent,
        PopupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(AdminLayoutRoutes),
        BlockUIModule.forRoot()
    ],
    exports: [
        NavbarComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ComponentsModule { }
