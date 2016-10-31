
/**
 * Created by sergei_rudenkov on 10/31/16.
 */

class A {

    constructor(){
        this.p1 = 2;
    }

    f1(){
        return 7;
    }

    getP1(){
        return this.p1;
    }
}

class B extends A{
    constructor(){
        super();
        this.p2 = 'hello';
    }

    f2(x) {
        return 2 * x;
    }

    getP2(){
        return this.p2;
    }
}

class C extends B {
    constructor(){
        super();
        this.p2 = 'Bye';
    }

    getP2(){
        return this.p2;
    }
}

class D extends C {
    constructor(){
        super();
        this.p4 = 7 * super.getP1();
    }
    f2(x) {
        return super.f2(x) * 7;
    }
    f4(x){
        return super.f1() + this.f2(x);
    }

    getP4(){
        return this.p4;
    }
}

const d = new D();
const test_num = 3;
console.log(d.f2(test_num));
