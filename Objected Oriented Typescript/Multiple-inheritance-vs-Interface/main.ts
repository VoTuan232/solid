abstract class Charactor {
    hunger: number;
    health: number;

    abstract eat(): void
}

// class Hero extends Charactor {
//     heroId: number 

//     eat() {
//         this.hunger += 3;
//     }
// }

interface Hero extends Charactor {
    heroId: number 
}

// class Enemy extends Charactor {
//     enemyId: number;
//     eat() {
//         this.hunger += 1
//     }
// }

interface Enemy extends Charactor {
    enemyId: number;
}

// Classes can only extend a single class.
// class Spy extends Hero, Enemy {

// }

class Spy implements Hero, Enemy {
    hunger: number
    health: number
    heroId: number 
    enemyId: number

    eat() {
        this.hunger -= 1;
    }
}

const spy = new Spy();
// spy.hunger = 1;
// spy.heroId = 1;
// spy.health = 2;
console.log(spy)

// 1. basic class
// 2. subclasses
// 3. abstract class
// 4. interface