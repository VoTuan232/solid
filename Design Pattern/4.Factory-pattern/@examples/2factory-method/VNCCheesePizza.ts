import { TwoAPizza } from "./APizza";

export class VNCCheesePizza extends TwoAPizza {
	constructor() { 
        super();
		this.name = "NY Style Sauce and Cheese Pizza";
		this.dough = "Thin Crust Dough";
		this.sauce = "Marinara Sauce";
		this.toppings.push("Grated Reggiano Cheese");
	}
}