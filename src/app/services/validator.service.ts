import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})

export class CustomValidatorService{

	expirationDateValidator = (cardMonth:string, cardYear:string)=>{
		return (formGroup:FormGroup)=>{

			let cardMonthControl = formGroup.controls[cardMonth].value;
			let cardYearControl = formGroup.controls[cardYear].value;


			if(!cardMonthControl||!cardYearControl){
				return null;
			}

			let currentDate = new Date();
			cardYearControl = '20'+cardYearControl;
			cardMonthControl = (Number(cardMonthControl)-1)+'';
			let cardDate = new Date(new Date(new Date().setFullYear(cardYearControl)).setMonth(cardMonthControl));
			
			currentDate = new Date(currentDate.setHours(0,0,0));
			if(cardDate<currentDate){
				formGroup.controls[cardMonth].setErrors({illegalDate:true});
				return {illegalDate:true};
			}
			else{
				formGroup.controls[cardMonth].setErrors(null);
				return null;
			}
		}
	}

	stringNumberValidator = ():ValidatorFn=>{
		return(control:AbstractControl):object|null=>{
			if(!control.value){
				return null;
			}
			return /^\d+$/.test(control.value)?null:{notANumber:true};
		}
	}

}


