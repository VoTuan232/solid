// Apply Dependency Inversion Principles
// PizzaStore and All Pizza Type phụ thuộc vào lớp trừu tượng Pizza

interface Dough {

}

interface Sauce {

}

interface Cheese {

}

interface Clam {

}

interface Veggie {

}

class ThinCrustDough implements Dough {
    
}

class MarinaraSauce implements Sauce {

}

class ReggianoCheese implements Cheese {

}

class Garlic implements Veggie {

}

class Onion implements Veggie {

}

class Fresh implements Clam {

}

interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggie;
    createClam(): Clam;
    // ...
}

// VietNam Factory
class VietNamIngredientFactory implements PizzaIngredientFactory {
    createClam(): Clam {
        return new Fresh();
    }
    createDough(): Dough {
        return new ThinCrustDough();
    }
    createSauce(): Sauce {
        return new MarinaraSauce();
    }
    createCheese(): Cheese {
        throw new ReggianoCheese();
    }
    createVeggies(): Veggie[] {
        const veggies: Veggie[] = [new Garlic(), new Onion()]
        return veggies;
    }
}

// Pizza
abstract class Pizza3 {
    name: string;
    dough: Dough;
    sauce: Sauce;
    cheese: Cheese;
    clam: Clam;
    veggies: Veggie[];

    abstract prepare(): void;

    bake(): this {
        console.log('Bake ClamPizza2')
        return this;
    }
    cut(): this {
        console.log('Cut ClamPizza2')
        return this;
    }
    box(): this {
        console.log('Box ClamPizza2')
        return this;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
}


class CheesePizza3 extends Pizza3 {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): void {
        console.log(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}

class ClamPizza3 extends Pizza3 {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): void {
        console.log(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.clam = this.ingredientFactory.createClam();
    }
}

abstract class  PizzaStore3 {
    orderPizza(type: string) {
        const pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }

    abstract createPizza(type: string): Pizza3; 
}

class VietNamPizzaStore3 extends PizzaStore3 {
    createPizza(type: string): Pizza3 {
        let pizza: Pizza3;
        const ingredientFactory: VietNamIngredientFactory = new VietNamIngredientFactory();
        if (type === 'cheese') {
            pizza = new CheesePizza3(ingredientFactory)
            pizza.setName('VietName cheese pizza')
        } else if (type === 'clam') {
            pizza = new ClamPizza3(ingredientFactory)
        }
        return pizza!;
    }
}

class OrderFirst {
    main() {
        const store: PizzaStore3 = new VietNamPizzaStore3()
        store.orderPizza('cheese');
    }
}