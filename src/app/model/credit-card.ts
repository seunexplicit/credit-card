
export class CreditCard {
	creditCardNumber:string;
	cardHolder:string;
	expirationDate:Date;
	securityCode?:string;
	amount:number;

}

export class CreditCardDisplay{
	creditCardNumber:string;
	cardHolder:string;
	expirationDate:string;
	securityCode?:string;
	amount:number;
}
