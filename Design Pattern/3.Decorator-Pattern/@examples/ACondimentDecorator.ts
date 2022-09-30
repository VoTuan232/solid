import { ABeverage } from "./ABeverage";

export abstract class ACondimentDecorator extends ABeverage {
	public abstract getDescription(): string;
}