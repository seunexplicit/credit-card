import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { CreditCard, CreditCardDisplay } from '../../model/credit-card';
import { getCards, getCard, CreditCardState, initialCreditState } from '../../reducers';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-card-display-page',
  templateUrl: './card-display-page.component.html',
  styleUrls: ['./card-display-page.component.scss']
})
export class CardDisplayPageComponent implements OnInit {

	cards$:Observable<CreditCardDisplay[]>; 

  constructor(private store:Store<CreditCardState>) { }

  ngOnInit(): void {
  	this.cards$ = this.store.pipe(select(getCards),
  					map(cards=>{
  						let transformedCards = [];
						for(let j=0; j<cards['creditCard'].length; j++ ){
	  						let year = cards['creditCard'][j].expirationDate.getFullYear();
	  						let month = cards['creditCard'][j].expirationDate.getMonth()+1;
	  						let yearDisplay = ''; 
	  						let monthDisplay = '';
	  						yearDisplay = (year+'').substring(2,4);
	  						if(month<10) monthDisplay = '0'+month;
	  						transformedCards.push({ ...cards['creditCard'][j], expirationDate:monthDisplay+' / '+yearDisplay})
	  					}
	  					return transformedCards
  					})
  				);
  }

  randomValue(){
  	return Math.floor(Math.random()*3);
  }

}
