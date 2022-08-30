
// 1. Single Responsibility 

class Car { 
    drive() {
        return 'I am Driving'
    }

    openDoor() {
        return 'Opening door'
    }
}

class Person {
    jump() {
        return 'I am Jump'
    }

    walk() {
        return 'I am Walk'
    }
}

// 2. Open/Close principles 

// class SuperHero extends Person {
//     fly() {
//         return 'I am Flying'
//     }
// }

// 3. Liskov Substitution Principles 
interface SuperInterface { 
    fly(): string;
    // hyperSpeed(): string;
}



class SuperHero extends Person implements SuperInterface {
    fly() {
        return 'I am Flying'
    }
}

class SuperVillan extends Person implements SuperInterface {
    fly() {
        return 'I am a super villan fly'
    }
}

// 4. Interface Segregation Principles
interface SpeedyInterface {
    hyperSpeed(): string
}

class SuperCar extends Car implements SuperInterface, SpeedyInterface {
    fly() {
        return 'I am a car flying'
    }

    hyperSpeed() {
        return 'I am go to super speed'
    }
}

// 5. Dependency Inversion Of Control
class SuperWorld {
    private car: SuperCar

    constructor(car: SuperCar) {
        this.car = car
    }

    beginHighSpeedChase() {
        return `${this.car.hyperSpeed()} but I Crash`
    }
}

const superHero = new SuperCar()
// console.log(superHero.fly())

const superCar = new SuperCar()

const superWorld = new SuperWorld(superCar)

console.log(superWorld.beginHighSpeedChase())