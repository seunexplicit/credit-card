import {
  createSelector,
  Action,
  MetaReducer,
  createReducer, 
  on,
  props
} from '@ngrx/store';
import { CreditCard } from '../model/credit-card';
import { CreditAction } from '../component/create-card/create-card.actions'

import { environment } from '../../environments/environment';

export interface CreditCardState {
	creditCard:Array<CreditCard>|[]
}

export const initialCreditState:CreditCardState = {
	creditCard:[]
}

const _creditCardReducer = createReducer(
	initialCreditState,
	on(CreditAction, (state, { creditCard })=>({creditCard:[...state.creditCard, creditCard ]})
		)
)


export function reducer(state:CreditCardState = initialCreditState, action:Action){
	return _creditCardReducer(state, action);
}

export const getCards = (state:CreditCardState)=>state.creditCard;
export const getCard = createSelector(
    getCards,
    (state,props)=>state.creditCard[props.index])


export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
