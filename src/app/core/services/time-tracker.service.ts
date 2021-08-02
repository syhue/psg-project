import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TimeTracker } from '../models/time-tracker/time-tracker';
import { TimeTrackerModel } from '../models/time-tracker/time-tracker.model';

@Injectable({
    providedIn: 'root'
})
export class TimeTrackerService {

    route = environment.apiServer + 'time-tracker';

    constructor(
        private http: HttpClient
    ) { }

    createRecords(data: any): Observable<TimeTracker> {
        const body: any = data
        return this.http.post<TimeTrackerModel>(this.route, body)
            .pipe(map(result => new TimeTracker(result)))
    }


    getRecords(month?: number, year?: number):Observable<TimeTracker[]> {
        const params: any = {
            month: month || "",
            year: year || ""
        }
        return this.http.get<TimeTrackerModel[]>(this.route, {params: params})
            .pipe(map(array => array.map(data => new TimeTracker(data))));
    }

}
