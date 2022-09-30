import { OneAPizza } from "./APizza";

export class OneCClamPizza extends OneAPizza {
	public constructor() {
        super();
		this.name = "Clam Pizza";
		this.dough = "Thin crust";
		this.sauce = "White garlic sauce";
		this.toppings.push("Clams");
		this.toppings.push("Grated parmesan cheese");
	}
}