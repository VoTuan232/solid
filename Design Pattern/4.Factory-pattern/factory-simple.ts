/**
 * Not Pattern here
 */
interface Pizza {
    prepare: () => void;
    bake: () => void;
}

class CheesePizza implements Pizza {
    prepare() {
        console.log('prepare CheesePizza')
    }
    bake() {
        console.log('bake CheesePizza')
    }
}

class ClamPizza implements Pizza {
    prepare() {
        console.log('prepare CheesePizza')
    }
    bake() {
        console.log('bake CheesePizza')
    }
}

class SimplePizzaFactory {
    createPizza(type: string): Pizza {
        if (type === 'cheese') {
            return new CheesePizza();
        } else if (type === 'clam') {
            return new ClamPizza();
        } 

        return new CheesePizza();
    }
}

class PizzaStore {
    private factory: SimplePizzaFactory;
    constructor(factory: SimplePizzaFactory) {
        this.factory = factory;
    }

    orderPizza(type: string) {
        const pizza: Pizza = this.factory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        return pizza;
    }
}


class FactorySimple {
    main() {
        const factory = new SimplePizzaFactory();
        const store = new PizzaStore(factory);
        const pizza = store.orderPizza('clam')
    }
}