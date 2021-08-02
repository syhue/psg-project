import { Routes } from "@angular/router";
import { HomeComponent } from "../../pages/home/home.component";
import { RecordsComponent } from "../../pages/records/records.component";


export const AdminLayoutRoutes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Home'} },
    { path: 'records', component: RecordsComponent, data: { title: 'Records' } }
]