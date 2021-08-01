import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        NavbarComponent,
    ]
})
export class ComponentsModule { }
