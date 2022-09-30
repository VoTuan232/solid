import { OneAPizza } from "./APizza";
import { OneSimplePizzaFactory } from "./PizzaFactory";

export class OnePizzaStore {
	factory: OneSimplePizzaFactory;
 
	public constructor(factory: OneSimplePizzaFactory) { 
		this.factory = factory;
	}
 
	public orderPizza(type: string): OneAPizza {
		const pizza = this.factory.createPizza(type);
        
        if (!pizza) throw new Error('Not Found Pizza')
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		return pizza;
	}

}