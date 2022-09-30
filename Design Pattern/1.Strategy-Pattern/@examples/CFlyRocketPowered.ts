import { IFlyBehavior } from "./IFlyBehavevior";

export class CFlyRocketPowered implements IFlyBehavior {
	fly() {
		console.log("I'm flying with a rocket");
	}
}