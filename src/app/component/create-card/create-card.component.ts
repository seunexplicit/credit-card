import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import  { CustomValidatorService }  from '../../services/validator.service';
import { Store, select } from '@ngrx/store';
import { CreditAction } from './create-card.actions';
import { CreditCardState } from '../../reducers/index';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {

	public creditCardForm:FormGroup;
  public showToast:string ='none';

  constructor(
  		private fb:FormBuilder,
  		private customValidator:CustomValidatorService,
  		private store:Store<CreditCardState>
  	) { 
  		this.creditCardForm  = this.fb.group({
    			creditCardNumber:['', [Validators.required, this.customValidator.stringNumberValidator()]],
    			creditHolder:['', Validators.required],
    			cardMonth:['', Validators.required],
    			cardYear:['', Validators.required],
    			securityCode:['', [this.customValidator.stringNumberValidator(), Validators.minLength(3), Validators.maxLength(3)]],
    			amount:[0, [Validators.required, Validators.min(1)]]
  		}, {
  			 validator:this.customValidator.expirationDateValidator('cardMonth', 'cardYear')
  		})
  }

  ngOnInit(): void {
  }

  get creditCardNumber():any{ return this.creditCardForm.get('creditCardNumber') }
  get creditHolder():any{ return this.creditCardForm.get('creditHolder') }
  get cardMonth():any{ return this.creditCardForm.get('cardMonth'); }
  get cardYear():any{ return this.creditCardForm.get('cardYear'); }
  get securityCode():any{ return this.creditCardForm.get('securityCode'); }
  get amount():any{ return this.creditCardForm.get('amount') }

  onSubmit(){
  	let year = Number('20'+this.cardYear.value);
  	let month = Number(this.cardMonth.value) - 1; 
  	let cardValue = {
  		creditCardNumber:this.creditCardNumber.value,
  		cardHolder:this.creditHolder.value,
  		expirationDate:new Date(new Date(new Date().setMonth(month)).setFullYear(year)),
  		securityCode:this.securityCode.value,
  		amount:this.amount.value,
  	}

  	this.store.dispatch(CreditAction({creditCard:cardValue}));
    this.showToast ='flex'
    setTimeout(()=>{
      this.showToast = 'none';
    }, 4000);

  }

  numberArrayBuilder(start:number, end?:number):Array<any>{
  	let numberArray = [];
  	
  	if(!end){
  		end = start;
  		start = 1;
  	}

	for(let i=start; i<=end; i++){
		if(i<10){
			numberArray.push('0'+i);
		}
		else{
			numberArray.push(i+'');
		}
	}

	return numberArray;
  }

}
