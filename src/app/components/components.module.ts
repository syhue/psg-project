import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        MatSlideToggleModule
    ],
    exports: [
        NavbarComponent,
    ]
})
export class ComponentsModule { }
