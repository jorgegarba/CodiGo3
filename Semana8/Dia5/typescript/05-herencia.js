class claseA {
    constructor(a) {
        this.a = a;
    }
    getA() {
        console.log(this.a);
    }
}
class claseB extends claseA {
    constructor(z, b) {
        super(z);
        this.b = b;
    }
}
let objB = new claseB(20, 40);
objB.getA();
