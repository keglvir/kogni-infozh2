var Parallelogram = /** @class */ (function () {
    function Parallelogram(base, height, sideA, sideB, angle) {
        this.base = base;
        this.height = height;
        this.sideA = sideA;
        this.sideB = sideB;
        this.angle = angle;
    }
    Parallelogram.prototype.calculateAreaWithHeight = function () {
        return this.base * this.height;
    };
    Parallelogram.prototype.calculateAreaWithAngle = function () {
        var radians = this.angle * (Math.PI / 180); // Convert angle to radians
        return this.sideA * this.sideB * Math.sin(radians);
    };
    return Parallelogram;
}());
// Example usage:
var parallelogram = new Parallelogram(5, 8, 7, 9, 60);
var areaWithHeight = parallelogram.calculateAreaWithHeight();
var areaWithAngle = parallelogram.calculateAreaWithAngle();
console.log("Area with height: ".concat(areaWithHeight));
console.log("Area with angle: ".concat(areaWithAngle));
