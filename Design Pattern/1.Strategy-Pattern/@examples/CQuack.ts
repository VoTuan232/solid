import { IQuackBehavior } from "./IQuackBehavior";

export class CQuack implements IQuackBehavior {
	public quack() {
		console.log("Quack");
	}
}