class Charactor {
    static charactorCount = 0;
    private hunger: number;
    private health: number;

    constructor(hunger: number, health: number) {
        this.health = health;
        this.hunger = hunger;
        Charactor.charactorCount++;
        console.log(`Created ${Charactor.charactorCount} charactor`)
    }

    setHunger(hunger: number): void {
        this.hunger = hunger;
    }

    getHunger(): number {
        return this.hunger;
    }

    setHealth(health: number): void {
        this.health = health;
    }
}

class Hero extends Charactor {
    heroId: number;
    readonly gender: string;

    // Constructors for derived classes must contain a 'super' call.ts(2377)
    constructor(hunger: number, health: number , heroId: number, gender = 'male') {
        super(hunger, health)
        this.heroId = heroId
        this.gender = gender
        console.log(`Hero: ${Charactor.charactorCount}`)
    }

    // Cannot assign to 'gender' because it is a read-only property.ts(2540)
    // setGender(gender: string): void {
    //     this.gender = gender;
    // }

    setHeroId(heroId: number) {
        this.heroId = heroId
    }

    getHeroId(): number {
        return this.heroId;
    }
}

const jeff = new Charactor(211, 200);
console.log(jeff.getHunger())

const hero = new Hero(100, 100, 100)
console.log(hero.gender)
console.log(hero.getHeroId())

const hero2 = new Hero(100, 100, 100)
const hero3 = new Hero(100, 100, 100)
const hero4 = new Hero(100, 100, 100)
const hero5 = new Hero(100, 100, 100)