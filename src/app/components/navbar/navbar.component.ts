import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { TimeTrackerService } from '../../core/services/time-tracker.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isWorking = false;
    startTime!: moment.Moment;
    endTime!: moment.Moment;
    currentTime = moment().format('hh:mm:ss');
    durationFromStartTime!: string;
    setInterval!: any;
    @BlockUI() blockUI!: NgBlockUI;

    constructor(
        private timeTrackerService: TimeTrackerService
    ) { }

    ngOnInit(): void {
    }

    clockIn() {
        this.isWorking = true;
        this.startTime = moment();
        this.blockUI.start('Loading...');
        this.setInterval = setInterval(() => {
            this.durationFromStartTime = this.startTime.fromNow(true).split(" ").filter(d => d !== 'ago').join(" ");
        } , 1000);
        this.blockUI.stop();
    }

    clockOut() {
        this.endTime = moment();
        
        const data = {
            startTime: this.startTime,
            endTime: this.endTime,
            duration: this.durationFromStartTime
        }

        this.blockUI.start('Loading...');
        this.timeTrackerService.createRecords(data).subscribe(
            () => {
                this.isWorking = false;
                this.durationFromStartTime = "";
                clearInterval(this.setInterval);
                this.blockUI.stop();
            });
    }
}
