class claseA{
    constructor(public a:number){}
    getA():void{
        console.log(this.a);
    }
}
class claseB extends claseA{
    constructor(public a:number,public b:number){
        super(a);
    }
}

let objB = new claseB(20,40);
objB.getA();

