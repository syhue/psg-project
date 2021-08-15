import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupService } from '../../components/popup/popup.service';
import { LoginService } from '../../core/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    username: string = "";
    password: string = "";
    errorMessage = "";

    constructor(
        private loginService: LoginService,
        private router: Router,
        private route: ActivatedRoute,
        private popupService: PopupService
    ) { }

    ngOnInit(): void {
    }

    // login() {
        // this.router.navigate(['../home'], {relativeTo: this.route});
    // }

    login() {
        console.log(this.username, this.password);
        this.errorMessage = "";

        if (!(this.username && this.password)) {
            this.popupService.alert("Please fill in your username and password.");
            return;
        }
        this.loginService.signIn(this.username, this.password).subscribe(
            () => {
                console.log('success');
                this.router.navigate(['../home'], {relativeTo: this.route});
            }),
            (err: any) => {
                if (err) console.log(err);
            }
    }
}
