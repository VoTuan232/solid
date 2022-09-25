

abstract class Beverage2 {
    description: string = 'Unknown Beverage'

    getDescription() {
        return this.description;
    }

    abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage2 {
    abstract getDescription(): string;
}


// class Beverage
class Espresso extends Beverage2 {
    description = 'Espresso'

    cost(): number {
        return 100;
    }
}

class HouseBlend2 extends Beverage2 {
    description = 'House Blend Coffe'
    cost(): number {
        return 200;
    }
}

// class toping
class Mocha2 extends CondimentDecorator {
    beverage: Beverage2;
    originCost = 1;

    constructor(beverage: Beverage2) {
        super()
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Mocha'
    }

    cost(): number {
        return this.originCost + this.beverage.cost()
    }
}

class Soy extends CondimentDecorator {
    beverage: Beverage2;
    originCost = 2;

    constructor(beverage: Beverage2) {
        super()
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Soy'
    }

    cost(): number {
        return this.originCost + this.beverage.cost()
    }
}

// Main
class StarbuzzCoffe {
    main() {
        const beverage = new Espresso()
        console.log(beverage.getDescription() + ': $' + beverage.cost())

        let beverage2 = new Espresso()
        beverage2 = new Mocha2(beverage2);
        console.log(beverage2.getDescription() + ': $' + beverage2.cost())

        let beverage3 = new Espresso()
        beverage3 = new Mocha2(beverage3);
        beverage3 = new Soy(beverage3);
        beverage3 = new Mocha2(beverage3);
        console.log(beverage3.getDescription() + ': $' + beverage3.cost())
    }
}

new StarbuzzCoffe().main()
