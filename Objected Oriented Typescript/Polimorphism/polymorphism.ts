class Hero {
    hunger: number
    health: number

    attack() {
        console.log("I'm attack")
    }
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
        super.attack()
        console.log("Firing an arrow")
        this.arrow -= 1
    }
}
class Mage extends Hero {
    attack() {
        super.attack()
        console.log("Mage attack")
    }
}
class Knight extends Hero {
    shield: number 
    attack() {
        super.attack()
        console.log("Knight attack")
    }
}

class Tribe {
    private heros: Hero[]

    setHeros(heros: Hero[]) {
        this.heros = heros
    }

    attack() {
        for (let hero of this.heros) {
            hero.attack() // dont know type of Hero is: Knight or Mage or Archer
        }
    }
}

const archer: Hero = new Archer()
const mage: Hero = new Mage()
const knight: Hero = new Knight()

const tribe = new Tribe()
tribe.setHeros([archer, mage, knight])
tribe.attack()