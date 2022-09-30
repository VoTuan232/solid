import { ABeverage } from "./ABeverage";
import { CDecaf } from "./CDecaf";
import { CMilkDecorator } from "./CMilkDecorator";
import { CMochaDecorator } from "./CMochaDecorator";

class Main {
 
	public static main() {
		let beverage: ABeverage = new CDecaf();
		console.log(beverage.getDescription() 
				+ " $" + beverage.cost());
 
        beverage = new CMilkDecorator(beverage);
		beverage = new CMochaDecorator(beverage);
		console.log(beverage.getDescription() 
				+ " $" + beverage.cost());
	}
}

Main.main()
