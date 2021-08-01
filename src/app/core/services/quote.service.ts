import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '../models/quote';

@Injectable({
    providedIn: 'root'
})
export class QuoteService {

    constructor(
    ) { }

    getRandomQuote(): Promise<Quote>{
        return fetch('https://api.quotable.io/random?tags=famous-quotes')
            .then(response => response.json());
    }
}
