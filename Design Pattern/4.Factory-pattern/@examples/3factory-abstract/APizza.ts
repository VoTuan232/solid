import { ICheese } from "./ICheese";
import { IClams } from "./IClams";
import { IDough } from "./IDough";
import { IPepperoni } from "./IPepperoni";
import { ISauce } from "./ISauce";
import { IVeggies } from "./IVeggies";

export abstract class ThreeAPizza {
	name: string;

	dough: IDough;
	sauce: ISauce;
	veggies: IVeggies[];
	cheese: ICheese;
	pepperoni: IPepperoni;
	clam: IClams;

	abstract prepare(): void;

	bake(): void {
		console.log("Bake for 25 minutes at 350");
	}

	cut(): void {
		console.log("Cutting the pizza into diagonal slices");
	}

	box(): void {
		console.log("Place pizza in official PizzaStore box");
	}

	setName(name: string): void {
		this.name = name;
	}

	getName() {
		return this.name;
	}

	toString() {
		let result = '';
		result.concat("---- " + this.name + " ----\n");
		if (this.dough != null) {
			result.concat(this.dough.toString());
			result.concat("\n");
		}
		if (this.sauce != null) {
			result.concat(this.sauce.toString());
			result.concat("\n");
		}
		if (this.cheese != null) {
			result.concat(this.cheese.toString());
			result.concat("\n");
		}
		if (this.veggies != null) {
			for (let i = 0; i < this.veggies.length; i++) {
				result.concat(this.veggies[i].toString());
				if (i < this.veggies.length-1) {
					result.concat(", ");
				}
			}
			result.concat("\n");
		}
		if (this.clam != null) {
			result.concat(this.clam.toString());
			result.concat("\n");
		}
		if (this.pepperoni != null) {
			result.concat(this.pepperoni.toString());
			result.concat("\n");
		}
		return result.toString();
	}
}

