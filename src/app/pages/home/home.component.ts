import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Quote } from '../../core/models/quote';
import { QuoteService } from '../../core/services/quote.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    quote!: Quote;
    @BlockUI() blockUI!: NgBlockUI;

    constructor(
        private quoteService: QuoteService
    ) { }

    ngOnInit(): void {
        this.blockUI.start('Loading...');
        this.getQuote();
    }

    getQuote() {
        return this.quoteService.getRandomQuote().then(q => {
            this.quote = q;
            this.blockUI.stop();
        });
    }

}
