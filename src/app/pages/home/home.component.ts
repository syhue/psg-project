import { Component, OnInit } from '@angular/core';
import { Quote } from '../../core/models/quote';
import { QuoteService } from '../../core/services/quote.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    quote!: Quote;

    constructor(
        private quoteService: QuoteService
    ) { }

    ngOnInit(): void {
        this.getQuote();
    }

    getQuote() {
        return this.quoteService.getRandomQuote().then(q => this.quote = q);
    }

}
