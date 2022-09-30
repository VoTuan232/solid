import { OneAPizza } from "./APizza";

export class OneCCheesePizza extends OneAPizza {
	public constructor() {
        super();
		this.name = "Cheese Pizza";
		this.dough = "Regular Crust";
		this.sauce = "Marinara Pizza Sauce";
		this.toppings.push("Fresh Mozzarella");
		this.toppings.push("Parmesan");
	}
}