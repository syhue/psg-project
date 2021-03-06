import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { TimeTrackerService } from '../../core/services/time-tracker.service';
import { PopupService } from '../popup/popup.service';

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
        private timeTrackerService: TimeTrackerService,
        private router: Router,
        private popupService: PopupService
    ) { }

    ngOnInit(): void {
    }

    reloadCurrentRoute() {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
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
                this.reloadCurrentRoute();
            },
            err => {
                if (err) this.popupService.alert(err.error.message);
                this.blockUI.close();
            });
    }

    logout() {
        if (this.isWorking) {
            this.popupService.alert('Please clock out before logout.');
            return;
        }
        this.router.navigate(['../login']);
    }
}
