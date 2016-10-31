/**
 * Created by sergei_rudenkov on 10/30/16.
 */

var A = function () {
    this.p1 = 2;
};
A.prototype.f1 = function () {
    return 7;
};
var B = function () {
    A.call(this);
    this.p2 = 'hello';
};
inherit(B, A);

B.prototype.f2 = function (x) {
    return 2 * x;
};

var C = function () {
    B.call(this);
    this.p2 = 'Bye';
};
inherit(C, B);

var D = function () {
    C.call(this);
    this.p4 = 7 * this.p1;
};
inherit(D, C);

D.prototype.f2 = function (x) {
    return C.prototype.f2.call(this, x) * 7;
};
D.prototype.f4 = function (x) {
    return A.prototype.f1.call(this) + this.f2(x);
};

function inherit(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

var test_num = 3;
var d = new D();
console.log(d.f2(test_num));
console.log(d.f4(test_num));
