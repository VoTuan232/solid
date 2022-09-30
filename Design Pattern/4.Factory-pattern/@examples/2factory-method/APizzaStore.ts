import { TwoAPizza } from "./APizza";

export abstract class TwoPizzaStore {
	abstract createPizza(type: string): TwoAPizza | null;

	public orderPizza(type: string): TwoAPizza {
		const pizza = this.createPizza(type);
        
        if (!pizza) throw new Error('Not Found Pizza')
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		return pizza;
	}

}