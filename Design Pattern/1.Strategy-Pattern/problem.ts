
// cập nhật mỗi 6 tháng
// sẽ có nhiều loài vịt được thêm vào 
// ko phải loài vịt nào cũng có thể fly or quack 
// ==> tạo ra lớp interface : Flyable() với phương thức fly(), Quackable()  ???
// khi Flyable thêm phương thức ==> tất cả class implements đều phải cập nhật code 

// `THAY ĐỔI` : là điều tất yếu , phần mềm luôn thay đổi 


abstract class Duck {
    abstract quack(): void; // sai ?  vịt gỗ kêu đc ?  ==> kế thừa ko phải đúng đắn 
    // abstract swim(): void;
    abstract display(): void;
    abstract fly(): void; // sai? tất cả loài vịt đều biết bay ? (vịt cao su ? biết bay ? vịt gỗ? )

    // test() {
    //     return 'test'
    // }
}

class MallardDuck extends Duck {
    display() {
        console.log(`I'm Mallard Duck!`)
    }
    quack() {
        console.log(`Mallard Duck Quack!`)
    }
    fly() {
        console.log(`Mallard Duck Fly!`)
    }
    uniqui() {
        return 'xxx'
    }
}

class RedheadDuck extends Duck {
    display() {
        console.log(`I'm Redhead Duck!`)
    }
    quack() {
        console.log(`RedHead Duck Quack!`)
    }
    fly() {
        console.log(`RedHead Duck Fly!`)
    }
}

// Rubber Duck dont quack
class RubberDuck extends Duck {
    display() {
        console.log(`I'm Redhead Duck!`)
    }
    quack() {
        console.log(`Squeak!!!!`) // ?? rít 
    }
    fly() {
        // override to do nothing ?? 
    }
}

class DecoyDucck extends Duck {
    display() {
        console.log(`I'm Decoy Duck!`)
    }
    quack() {
        // override to do nothing ?? 
    }
    fly() {
        // override to do nothing ?? 
    }
}

const mallard: Duck = new MallardDuck();
mallard.display()
// console.log(mallard.uniqui()) // Property 'uniqui' does not exist on type 'Duck'.ts(2339)
