import { VNStorePizza } from "./VNFactoryPizza";

class Main {
 
	public static main() {
		const store = new VNStorePizza();

		let pizza = store.orderPizza("cheese");
		console.log("We ordered a " + pizza.getName() + "\n");
 
		pizza = store.orderPizza("clam");
		console.log("We ordered a " + pizza.getName() + "\n");
	}
}

Main.main()