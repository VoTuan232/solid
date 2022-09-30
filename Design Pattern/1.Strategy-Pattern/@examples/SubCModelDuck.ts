import { AbstractDuck } from "./AbstractDuck";
import { CFlyNoWay } from "./CFlyNoWay";
import { CMuteQuack } from "./CMuteQuack";

export class SubCModeldDuck extends AbstractDuck {
	constructor() {
        super()
		this.quackBehavior = new CMuteQuack();
		this.flyBehavior = new CFlyNoWay();
	}
 
	public display() {
		console.log("I'm a real Mallard duck");
	}
}