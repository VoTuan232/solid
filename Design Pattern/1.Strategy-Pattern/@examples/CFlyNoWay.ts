import { IFlyBehavior } from "./IFlyBehavevior";

export class CFlyNoWay implements IFlyBehavior {
	fly() {
		console.log("I can't fly");
	}
}