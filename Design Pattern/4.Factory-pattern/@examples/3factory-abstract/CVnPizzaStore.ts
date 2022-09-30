import { ThreeAPizza } from "./APizza";
import { ThreePizzaStore } from "./APizzaStore";
import { CCheesePizza } from "./CCheesePizza";
import { CClamPizza } from "./CClamsPizza";
import { CVNPizzaIngredientFactory } from "./CVnPizzaIngredientFactory";
import { IPizzaIngredientFactory } from "./IPizzaIngredientFactory";

export class CVNPizzaStore extends ThreePizzaStore {

	createPizza(type: string) {
		let pizza: ThreeAPizza;
		const ingredientFactory: IPizzaIngredientFactory =
		new CVNPizzaIngredientFactory();

		if (type == "cheese") {

			pizza = new CCheesePizza(ingredientFactory);
			pizza.setName("VN Style Cheese Pizza");

		} else if (type == "clam") {

			pizza = new CClamPizza(ingredientFactory);
			pizza.setName("VN Style Clam Pizza");

		}

		return pizza!;
	}
}