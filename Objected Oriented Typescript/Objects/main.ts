class Player {
    name: string;
    crush: Player;

    greet() {
        return `Hello: My name is ${this.name}`
    }
}

const mario = new Player()
mario.name = 'Mario'
console.log('mario: ', mario)
console.log('greet: ', mario.greet())

const oliver = new Player()
oliver.name = 'Oliver'
console.log('oliver: ', oliver)
console.log('greet: ', oliver.greet())

mario.crush = oliver
console.log('crush name: ', mario.crush.name)

mario.crush.name = 'Baby'

console.log('new mario: ', mario)
console.log('new oliver: ', oliver)