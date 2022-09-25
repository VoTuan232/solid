abstract class Hero2 {
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

class Archer2 extends Hero2 {
    arrow: number 
    attack() {
        console.log("Firing an arrow")
        this.arrow -= 1
    }
}
abstract class Mage extends Hero2 {
    mana: number
    
}

class Wizard extends Mage {
    attack() {
        console.log("Mage attack")
        this.mana -= 1
    }
}

class Knight extends Hero2 {
    shield: number 
    attack() {
        console.log("Knight attack")
    }
}

const archer: Hero2 = new Archer2()
// archer.move()
const knight: Hero2 = new Knight()

const heros: Hero2[] = [knight, archer]

for (let hero of heros) {
    hero.attack()
}

// const bob: Hero2 = new Hero2() // Cannot create an instance of an abstract class.