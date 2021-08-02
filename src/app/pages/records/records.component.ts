import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TimeTracker } from '../../core/models/time-tracker/time-tracker';
import { TimeTrackerService } from '../../core/services/time-tracker.service';

@Component({
    selector: 'app-records',
    templateUrl: './records.component.html',
    styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

    records!: TimeTracker[];
    displayedColumns: string[] = ['number', 'date', 'startTime', 'endTime', 'exactDuration'];
    dataSource!: MatTableDataSource<TimeTracker>;

    constructor(
        private timeTrackerService: TimeTrackerService
    ) { }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.timeTrackerService.getRecords().subscribe(data => {
            this.dataSource = new MatTableDataSource(data);
        });
    }

}
