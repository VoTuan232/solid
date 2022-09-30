import { ABeverage } from "./ABeverage";

class CDarkRoast extends ABeverage {
	public constructor() {
        super();
		this.description = "Dark Roast Coffee";
	}
 
	public cost(): number {
		return .99;
	}
}