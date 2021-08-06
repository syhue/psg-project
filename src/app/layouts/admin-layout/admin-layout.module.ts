import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';
import { HomeComponent } from '../../pages/home/home.component';
import { RecordsComponent } from '../../pages/records/records.component';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [
        HomeComponent,
        RecordsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        MomentModule.forRoot({
            relativeTimeThresholdOptions: {
                'm': 59
            }
        }),
        MatTableModule,
    ],
    exports: [RouterModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class AdminLayoutModule { }
