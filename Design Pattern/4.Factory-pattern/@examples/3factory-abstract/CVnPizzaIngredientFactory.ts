import { CFreshClams } from "./CFreshClams";
import { CGarlicVeggies } from "./CGarlicVeggies";
import { CMarinaraSauce } from "./CMarinaraSauce";
import { COnionVeggies } from "./COnionVeggies";
import { CReggianoCheese } from "./CReggianoCheese";
import { CSlicedPepperoni } from "./CSlicePepperoni";
import { CThinCrustDough } from "./CThinCrustDough";
import { ICheese } from "./ICheese";
import { IClams } from "./IClams";
import { IDough } from "./IDough";
import { IPepperoni } from "./IPepperoni";
import { IPizzaIngredientFactory } from "./IPizzaIngredientFactory";
import { ISauce } from "./ISauce";
import { IVeggies } from "./IVeggies";

export class CVNPizzaIngredientFactory implements IPizzaIngredientFactory {
 
	createDough(): IDough {
		return new CThinCrustDough();
	}
 
	createSauce(): ISauce {
		return new CMarinaraSauce();
	}
 
	createCheese(): ICheese {
		return new CReggianoCheese();
	}
 
	createVeggie(): IVeggies[] {
		const veggies: IVeggies[] = [ new CGarlicVeggies(), new COnionVeggies()];
		return veggies;
	}
 
	createPepperoni(): IPepperoni {
		return new CSlicedPepperoni();
	}

	createClam(): IClams {
		return new CFreshClams();
	}
}