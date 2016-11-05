/**
 * Created by sergei_rudenkov on 11/5/16.
 */

let auto = function () {
    let me = {};

    publicApi();
    
    function publicApi() {
        me.speedUnit = "km/h";
        me.isEngineOn = false;

        me.getSpeed = function () {
            throw Error ("Unimplemented abstract method get");
        };
        me.setSpeed = function (speed) {
            throw Error ("Unimplemented abstract method set");
        };
        me.pressKlaxon = function () {
            console.log("Bibip!");
        };
        me.turnEngineOn = function () {
            me.isEngineOn = true;
        };
        me.turnEngineOff = function () {
            me.isEngineOn = false;
        };
    }
    return me;
};

let a = auto();
a.pressKlaxon();

let cabriolet = function () {
    let me = auto();
    // static var
    me.maxSpeed = 200;
    publicApi();

    function publicApi() {
        me.speed = 120;
        me.speedUnit = "km/h";
        me.isEngineOn = false;
        me.roofCollapsed = false;

        me.getSpeed = function () {
            return me.speed;
        };
        me.setSpeed = function (speed) {
            me.speed = speed;
        };
        me.collapseRoof = function () {
            me.roofCollapsed = true;
        };
        me.raiseRoof = function () {
            me.roofCollapsed = false;
        };
    }
    return me;
};

let b = cabriolet();
console.log(b.maxSpeed);
b.setSpeed(130);
console.log(b.getSpeed());