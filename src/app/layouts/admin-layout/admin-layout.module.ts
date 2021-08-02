import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';
import { HomeComponent } from '../../pages/home/home.component';
import { RecordsComponent } from '../../pages/records/records.component';
import { AdminLayoutRoutes } from './admin-layout.routing';


@NgModule({
    declarations: [
        HomeComponent,
        RecordsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        MomentModule.forRoot({
            relativeTimeThresholdOptions: {
                'm': 59
            }
        }),
        MatTableModule,
        MatProgressSpinnerModule
    ],
    exports: [RouterModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class AdminLayoutModule { }
