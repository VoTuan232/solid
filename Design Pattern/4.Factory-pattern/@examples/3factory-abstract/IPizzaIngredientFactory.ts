import { ICheese } from "./ICheese";
import { IClams } from "./IClams";
import { IDough } from "./IDough";
import { IPepperoni } from "./IPepperoni";
import { ISauce } from "./ISauce";
import { IVeggies } from "./IVeggies";

export interface IPizzaIngredientFactory {
 
	createDough(): IDough;
	createSauce(): ISauce;
	createCheese(): ICheese;
	createVeggie(): IVeggies[];
	createPepperoni(): IPepperoni;
	createClam(): IClams;
 
}