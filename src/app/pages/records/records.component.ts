import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { TimeTracker } from '../../core/models/time-tracker/time-tracker';
import { TimeTrackerService } from '../../core/services/time-tracker.service';

@Component({
    selector: 'app-records',
    templateUrl: './records.component.html',
    styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

    day!: number;
    month!: number;
    year!: number;
    records!: TimeTracker[];
    displayedColumns: string[] = ['number', 'date', 'startTime', 'endTime', 'exactDuration'];
    dataSource!: MatTableDataSource<TimeTracker>;
    @BlockUI() blockUI!: NgBlockUI;
    
    constructor(
        private timeTrackerService: TimeTrackerService
    ) { }

    ngOnInit(): void {
        this.getData();
    }

    getData(day?: number, month?: number, year?: number) {
        this.blockUI.start('Loading...');
        this.timeTrackerService.getRecords(day, month, year).subscribe(data => {
            this.dataSource = new MatTableDataSource(data);
            this.blockUI.stop();
        });
    }

}
