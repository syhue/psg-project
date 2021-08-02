import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
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

    constructor(
        private timeTrackerService: TimeTrackerService
    ) { }

    ngOnInit(): void {
    }

    clockIn() {
        this.isWorking = true;
        this.startTime = moment();

        this.setInterval = setTimeout(() => {
            this.durationFromStartTime = this.startTime.fromNow(true).split(" ").filter(d => d !== 'ago').join(" ");
            if(!this.isWorking) clearInterval(this.setInterval);
        } , 1000);
    }

    clockOut() {
        this.endTime = moment();
        
        const data = {
            startTime: this.startTime,
            endTime: this.endTime,
            duration: this.durationFromStartTime
        }
        this.timeTrackerService.createRecords(data).subscribe(
            () => {
                this.isWorking = false;
                this.durationFromStartTime = "";
                clearInterval(this.setInterval);
            });
    }
}
