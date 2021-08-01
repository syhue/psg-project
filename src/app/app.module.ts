import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';


@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTooltipModule,
        ComponentsModule,
        RouterModule,
        FormsModule 
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
