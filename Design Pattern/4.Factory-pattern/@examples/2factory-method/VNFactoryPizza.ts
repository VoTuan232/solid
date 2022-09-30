import { TwoAPizza } from "./APizza";
import { TwoPizzaStore } from "./APizzaStore";
import { VNCCheesePizza } from "./VNCCheesePizza";
import { VNCClamPizza } from "./VNCClamPizza";

export class VNStorePizza extends TwoPizzaStore {
	createPizza(type: string): TwoAPizza | null {
		if (type == "cheese") {
			return new VNCCheesePizza();
		} else if (type == "clam") {
			return new VNCClamPizza();
		}

        return null;
	}
}