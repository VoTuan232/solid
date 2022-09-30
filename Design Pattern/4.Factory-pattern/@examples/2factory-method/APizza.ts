export abstract class TwoAPizza {
	name: string;
	dough: string;
	sauce: string;
	toppings: string[] = [];

	public getName() {
		return this.name;
	}

	public prepare() {
		console.log("Preparing " + this.name);
	}

	public bake() {
		console.log("Baking " + this.name);
	}

	public cut() {
		console.log("Cutting " + this.name);
	}

	public box() {
		console.log("Boxing " + this.name);
	}

	public print() {
		// code to display pizza name and ingredients
		let display = '';
		display.concat("---- " + this.name + " ----\n");
		display.concat(this.dough + "\n");
		display.concat(this.sauce + "\n");
		for (let i = 0; i < this.toppings.length; i++) {
			display.concat(this.toppings[i] + "\n");
		}
		return display.toString();
	}
}

