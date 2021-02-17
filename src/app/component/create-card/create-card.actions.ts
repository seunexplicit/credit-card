import { Action, createAction, props } from '@ngrx/store';
import { CreditCard } from '../../model/credit-card';


export const CreditAction  = createAction(
	'[Card Page] Add Credit Card',
	props<{creditCard:CreditCard}>()
	)

