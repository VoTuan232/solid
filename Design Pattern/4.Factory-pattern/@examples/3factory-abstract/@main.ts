import { CVNPizzaStore } from "./CVnPizzaStore";

class Main {
 
	public static main() {
		const store = new CVNPizzaStore();
 
		let pizza = store.orderPizza("cheese");
		console.log("You ordered a " + pizza.toString() + "\n");
 
		pizza = store.orderPizza("clam");
		console.log("You ordered a " + pizza.toString() + "\n");
	}
}

Main.main()