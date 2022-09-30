import { IFlyBehavior } from "./IFlyBehavevior";

export class CFlyWithWings implements IFlyBehavior {
	fly() {
		console.log("I'm flying!!");
	}
}
