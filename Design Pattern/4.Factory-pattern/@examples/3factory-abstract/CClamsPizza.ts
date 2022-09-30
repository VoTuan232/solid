import { ThreeAPizza } from "./APizza";
import { IPizzaIngredientFactory } from "./IPizzaIngredientFactory";

export class CClamPizza extends ThreeAPizza {
	ingredientFactory: IPizzaIngredientFactory;
 
	public constructor(ingredientFactory: IPizzaIngredientFactory) {
		super();
		this.ingredientFactory = ingredientFactory;
	}
 
	prepare(): void {
		console.log("Preparing " + this.name);
		this.dough = this.ingredientFactory.createDough();
		this.sauce = this.ingredientFactory.createSauce();
		this.cheese = this.ingredientFactory.createCheese();
		this.clam = this.ingredientFactory.createClam();
	}
}