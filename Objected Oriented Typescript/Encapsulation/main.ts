
class Player {
    private health: number;
    private speed: number;

    setHealth(health: number) {
        if (health < 0) console.log('You cant set health less zero!!!')
        this.health = health
    }

    getHealth() {
        return this.health
    }

    setSpeed(speed: number) {
        this.speed = speed
    }

    getSpeed() {
        return this.speed
    }
}

const mario = new Player()
mario.setHealth(-3);
mario.setHealth(3);
mario.setSpeed(10);

console.log(`Mario has: ${mario.getHealth()}  health`)
console.log(`Mario has: ${mario.getSpeed()}  speed`)