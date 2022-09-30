import { IQuackBehavior } from "./IQuackBehavior";

export class CMuteQuack implements IQuackBehavior {
	public quack() {
		console.log("<< Silence >>");
	}
}