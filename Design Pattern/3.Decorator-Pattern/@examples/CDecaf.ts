// Concrete Component

import { ABeverage } from "./ABeverage";

export class CDecaf extends ABeverage {
	public constructor() {
        super()
		this.description = "Decaf Coffee";
	}
 
	public cost(): number {
		return 10;
	}
}