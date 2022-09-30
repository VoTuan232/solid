import { ABeverage } from "./ABeverage";
import { ACondimentDecorator } from "./ACondimentDecorator";

export class CMilkDecorator extends ACondimentDecorator {
	beverage: ABeverage;

	public constructor(beverage: ABeverage) {
        super()
		this.beverage = beverage;
	}

	public getDescription(): string {
		return this.beverage.getDescription() + ", Milk";
	}

	public cost(): number {
		return 1 + this.beverage.cost();
	}
}