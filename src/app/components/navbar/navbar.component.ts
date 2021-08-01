import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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

    constructor() { }

    ngOnInit(): void {
    }

    clockIn() {
        this.isWorking = true;
        this.startTime = moment();

        setInterval(() => {
            this.durationFromStartTime = this.startTime.fromNow().split(" ").filter(d => d !== 'ago').join(" ");
            if (!this.isWorking) clearInterval();
           }, 1000);
    }

    clockOut() {
        this.isWorking = false;
    }
}
