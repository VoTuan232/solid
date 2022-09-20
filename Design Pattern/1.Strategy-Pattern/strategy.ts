interface FlyBehavior {
    fly(): void
}

interface QuackBehavior {
    quack(): void
}

class FlyWithWings implements FlyBehavior {
    fly() {
        console.log(`I'm flying`)
    }
}

class FlyRocketPowered implements FlyBehavior {
    fly() {
        console.log(`I'm flying with rocket`)
    }
}

class FlyNoWay implements FlyBehavior {
    fly() {
        console.log(`I can't fly`)
    }
}

class Quack implements QuackBehavior {
    quack() {
        console.log('Quack')
    }
}

class Squeak implements QuackBehavior {
    quack() {
        console.log('Squeak')
    }
}

class MuteQuack implements QuackBehavior {
    quack() {
        console.log('Silence')
    }
}

abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    // constructor(quackBehavior: QuackBehavior, flyBehavior: FlyBehavior) {
    //     this.flyBehavior = flyBehavior
    //     this.quackBehavior = quackBehavior
    // }

    setFlyBehavior(flyBehavior: FlyBehavior) {
        this.flyBehavior = flyBehavior
    }

    setQuackBehavior(quackBehavior: QuackBehavior) {
        this.quackBehavior = quackBehavior
    }

    performQuack() {
        this.quackBehavior.quack()
    }

    performFly() {
        this.flyBehavior.fly()
    }

    abstract display(): void;

    swim() {
        console.log('All duck float, even decoys!')
    }
}

class MallardDuck extends Duck {
    // constructor() {
    //     super(new MuteQuack(), new FlyNoWay()) // program implementation here ?? ==> pattern continue 
    // }

    constructor() {
        super()
        this.setFlyBehavior(new FlyWithWings())
        this.setQuackBehavior(new Quack())
    }

    display() {
        console.log('MallardDuck is diplaying')
    }
}

class ModelDuck extends Duck {
    constructor() {
        super()
        this.setFlyBehavior(new FlyNoWay())
        this.setQuackBehavior(new Quack())
    }

    display() {
        console.log('ModelDuck is diplaying')
    }
}

const duck: Duck = new MallardDuck() 
// duck.setFlyBehavior(new FlyNoWay())
// duck.setQuackBehavior(new MuteQuack())
duck.display()
duck.performQuack()
duck.performFly()
console.log('----------------------')

const duck2: Duck = new ModelDuck()
duck2.display()
duck2.performQuack()
duck2.performFly()
duck2.setFlyBehavior(new FlyRocketPowered()) // update with setter
duck2.performFly()