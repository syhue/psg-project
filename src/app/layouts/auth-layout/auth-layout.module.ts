import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../pages/login/login.component';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(AuthLayoutRoutes),
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class AuthLayoutModule { }
