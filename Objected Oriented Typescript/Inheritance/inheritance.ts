class Animal {
    hunger: number;
    health: number;
    protected coordX: number;
    protected coordY: number;

    setCoordX(coordX: number) {
        this.coordX = coordX;
    }

    setCoordY(coordY: number) {
        this.coordY = coordY;
    }

    eat() {
        console.log("I'm eating.")
    }

    sleep() {
        console.log("I'm sleeping")
    }

    move() {
        console.log("I'm moving")
    }

    makeNoise() {
        console.log("Make noise")
    }
}

// Dog IS-A Animal 
class Dog extends Animal {
    owner: string; // Dog Has-A owner 
    makeNoise() {
        console.log('Bark!!!')
    }

    returnToOwner() {
        console.log(`I'm at (${this.coordX}, ${this.coordY})`)
    }
}

const dog = new Dog()
dog.setCoordX(111)
dog.setCoordY(222)
dog.returnToOwner()
dog.makeNoise()