import { IFlyBehavior } from "./IFlyBehavevior";
import { IQuackBehavior } from "./IQuackBehavior";

export abstract class AbstractDuck {
	flyBehavior: IFlyBehavior;
	quackBehavior: IQuackBehavior;
 
	public setFlyBehavior (fb: IFlyBehavior) {
		this.flyBehavior = fb;
	}
 
	public setQuackBehavior(qb: IQuackBehavior) {
		this.quackBehavior = qb;
	}
 
	abstract display(): void;
 
	public performFly() {
		this.flyBehavior.fly();
	}
 
	public performQuack() {
		this.quackBehavior.quack();
	}
 
	public swim() {
		console.log("All ducks float, even decoys!");
	}
}