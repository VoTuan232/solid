
abstract class Pizza2 {
    protected name: string;
    protected dough: string;
    protected sauce: string;
    protected toppings: string[] = [];

    // abstract prepare(): this;
    prepare() {
        console.log('Preparing ' + this.name)
    }
    // abstract bake(): this;
    bake() {
        console.log('Bake for 25-30 minutes')
    }
    // abstract cut(): this;
    cut() {
        console.log('Cutting pizza to diagnal slices')
    }
    // abstract box(): this;
    box() {
        console.log('Place pizza in offical PizzaStore box')
    }

    getName() {
        return this.name
    }
} 

abstract class  PizzaStore2 {
    orderPizza(type: string) {
        const pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }

    // factory
    abstract createPizza(type: string): Pizza2; 
}

class CheesePizza2 extends Pizza2 {
    name: string = 'Cheese Pizza'
    dough: string = 'Thin Crust'
    sauce: string = 'Marianra Sauce'

    toppings: string[] = ['Granted Reggiano Cheese']
    // prepare(): this {
    //     this.name = 'Cheese'
    //     console.log('Prepare CheesePizza')
    //     return this;
    // }
    // bake(): this {
    //     console.log('Bake CheesePizza')
    //     return this;
    // }
    // cut(): this {
    //     console.log('Cut CheesePizza')
    //     return this;
    // }
    // box(): this {
    //     console.log('Box CheesePizza')
    //     return this;
    // }
}

class VeggiePizza2 extends Pizza2 {
    prepare(): this {
        console.log('Prepare VeggiePizza2')
        return this;
    }
    bake(): this {
        console.log('Bake VeggiePizza2')
        return this;
    }
    cut(): this {
        console.log('Cut VeggiePizza2')
        return this;
    }
    box(): this {
        console.log('Box VeggiePizza2')
        return this;
    }
}

class ClamPizza2 extends Pizza2 {
    name: string = 'Clam Pizza'
    dough: string = 'Thin Crust'
    sauce: string = 'Marianra Sauce'

    toppings: string[] = ['Granted Reggiano Cheese']

    prepare(): this {
        console.log('Prepare ClamPizza2')
        return this;
    }
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
}

class VietNamPizzaStore extends PizzaStore2 {
    createPizza(type: string): Pizza2 {
        if (type === 'cheese') {
            return new CheesePizza2();
        } else if (type === 'veggie') {
            return new VeggiePizza2()
        }
        return new CheesePizza2();
    }
}

class RussPizzaStore extends PizzaStore2 {
    createPizza(type: string): Pizza2 {
        if (type === 'cheese') {
            return new CheesePizza2();
        } else if (type === 'clam') {
            return new ClamPizza2()
        }
        return new CheesePizza2();
    }
}

class PizzaTestDrive {
    main() {
        const pizzaStore: PizzaStore2 = new VietNamPizzaStore()
        const pizza = pizzaStore.orderPizza('cheese');
        console.log(`[VietNamPizzaStore] Ordered a ${pizza.getName()}`)
       
        const pizzaStore2: PizzaStore2 = new RussPizzaStore();
        const pizza2 = pizzaStore2.orderPizza('clam');
        console.log(`[RussPizzaStore] Ordered a ${pizza2.getName()}`)
    }
}

new PizzaTestDrive().main();