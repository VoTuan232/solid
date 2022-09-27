

function* generateId() {
    let id = 1;
    while(true) {
        const inc = yield id
        if (inc !== null) {
            id += inc;
        } else {
            id += 1;
        }
    }
}

const a = generateId();
console.log(a.next())
console.log(a.next(5))
console.log(a.next(3))
console.log(a.next())