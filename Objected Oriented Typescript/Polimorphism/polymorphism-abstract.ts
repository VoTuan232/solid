abstract class Hero {
    hunger: number
    health: number

    // Method 'attack' cannot have an implementation because it is marked abstract.
    abstract attack(): void;

    move() {
        console.log("I'm move")
    }
    eat() {
        console.log("I'm eat")
    }
}

class Archer extends Hero {
    arrow: number 
    attack() {
        console.log("Firing an arrow")
        this.arrow -= 1
    }
}
abstract class Mage extends Hero {
    mana: number
    
}

class Wizard extends Mage {
    attack() {
        console.log("Mage attack")
        this.mana -= 1
    }
}

class Knight extends Hero {
    shield: number 
    attack() {
        console.log("Knight attack")
    }
}

const archer: Hero = new Archer()
// archer.move()
const knight: Hero = new Knight()

const heros: Hero[] = [knight, archer]

for (let hero of heros) {
    hero.attack()
}

// const bob: Hero = new Hero() // Cannot create an instance of an abstract class.