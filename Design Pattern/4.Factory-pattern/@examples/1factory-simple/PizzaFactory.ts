import { OneAPizza } from "./APizza";
import { OneCCheesePizza } from "./CCheesePizza";
import { OneCClamPizza } from "./CClamPizza";

export class OneSimplePizzaFactory {

	public createPizza(type: string): OneAPizza {
		let pizza: OneAPizza;

		if (type === "cheese") {
			pizza = new OneCCheesePizza();
		} else if (type === "clam") {
			pizza = new OneCClamPizza();
		} 

		return pizza!;
	}
}
