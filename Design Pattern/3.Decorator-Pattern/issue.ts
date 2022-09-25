/**
 * Ta có các loại đồ uống
 * Mỗi đồ uống sẽ có 1 gía tiền khác nhau
 * ==> Bài toán: Thêm các topping và giá tiền cho đồ uống
 * ==> Thay vì tạo rất nhiều class : CafeWithTOpping... ==> cost() parent sẽ tính toán 
 * ==> khi thêm 1 topping mới ? hay double topping ?  ==> điều gì xảy ra ==>
 */

abstract class Beverage {
    abstract description: string;
    milk: boolean = false;
    soy: boolean = false;
    milkCost: number = 2;
    soyCost: number = 3;

    getDescription() {
        return this.description;
    }

    hasMilk() {
        return this.milk;
    }
    hasSoy() {
        return this.soy;
    }

    cost() {
        let extraPrice = 0;
        if (this.hasMilk()) {
            extraPrice += this.milkCost
        }
        if (this.hasSoy()) {
            extraPrice += this.soyCost
        }

        return extraPrice;
    }
}

class HouseBlend extends Beverage {
    description: string;
    soy: boolean = true;
    constructor(description: string) {
        super();
        this.description = description;
    }

    cost(): number {
        return 100 + super.cost();
    }
}

class DarkRoast extends Beverage {
    description: string;
    soy: boolean = true;
    constructor(description: string) {
        super();
        this.description = description;
    }

    cost(): number {
        return 200;
    }
}

const houseBlend = new HouseBlend('Demo HouseBlend')
console.log(houseBlend.getDescription())
console.log(houseBlend.cost())