import { ABeverage } from "./ABeverage";
import { ACondimentDecorator } from "./ACondimentDecorator";

export class CMochaDecorator extends ACondimentDecorator {
	beverage: ABeverage;
 
	public constructor(beverage: ABeverage) {
        super()
		this.beverage = beverage;
	}
 
	public getDescription(): string {
		return this.beverage.getDescription() + ", Mocha";
	}
 
	public cost(): number {
		return 2 + this.beverage.cost();
	}
}