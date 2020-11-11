import { Customer } from './customer';

export interface Order {
	id: number;
	customer: Customer;
	amount: number;
	placed: Date;
	fulfilled: Date;
}