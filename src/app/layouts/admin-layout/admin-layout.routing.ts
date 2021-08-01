import { Routes } from "@angular/router";
import { HomeComponent } from "../../pages/home/home.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Home'} },
]