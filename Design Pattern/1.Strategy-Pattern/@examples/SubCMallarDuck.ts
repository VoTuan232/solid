import { AbstractDuck } from "./AbstractDuck";
import { CFlyWithWings } from "./CFlyWithWing";
import { CQuack } from "./CQuack";

export class SubCMallardDuck extends AbstractDuck {
	constructor() {
        super()
		this.quackBehavior = new CQuack();
		this.flyBehavior = new CFlyWithWings();
	}
 
	public display() {
		console.log("I'm a real Mallard duck");
	}
}
