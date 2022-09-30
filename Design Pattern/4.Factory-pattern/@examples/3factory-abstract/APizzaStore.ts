import { ThreeAPizza } from "./APizza";

export abstract class ThreePizzaStore {
	abstract createPizza(type: string): ThreeAPizza | null;

	public orderPizza(type: string): ThreeAPizza {
		const pizza = this.createPizza(type);
        
        if (!pizza) throw new Error('Not Found Pizza')
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		return pizza;
	}

}