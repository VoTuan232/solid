// Component

export abstract class ABeverage {
	description = "Unknown Beverage";
  
	public getDescription() {
		return this.description;
	}
 
	public abstract cost(): number;
}
