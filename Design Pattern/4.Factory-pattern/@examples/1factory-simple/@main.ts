import { OneSimplePizzaFactory } from "./PizzaFactory";
import { OnePizzaStore } from "./PizzaStore";

class Main {
 
	public static main() {
		const factory = new OneSimplePizzaFactory();
		const store = new OnePizzaStore(factory);

		let pizza = store.orderPizza("cheese");
		console.log("We ordered a " + pizza.getName() + "\n");
		console.log(pizza.print())
 
		pizza = store.orderPizza("clam");
		console.log("We ordered a " + pizza.getName() + "\n");
		console.log(pizza.print())
	}
}

Main.main()