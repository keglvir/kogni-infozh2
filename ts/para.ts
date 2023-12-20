class Parallelogram {
    private base: number;
    private height: number;
    private sideA: number;
    private sideB: number;
    private angle: number;

    constructor(base: number, height: number, sideA: number, sideB: number, angle: number) {
        this.base = base;
        this.height = height;
        this.sideA = sideA;
        this.sideB = sideB;
        this.angle = angle;
    }

    calculateAreaWithHeight(): number {
        return this.base * this.height;
    }

    calculateAreaWithAngle(): number {
        const radians = this.angle * (Math.PI / 180); // Convert angle to radians
        return this.sideA * this.sideB * Math.sin(radians);
    }
}

// Example usage:
const parallelogram = new Parallelogram(5, 8, 7, 9, 60);
const areaWithHeight = parallelogram.calculateAreaWithHeight();
const areaWithAngle = parallelogram.calculateAreaWithAngle();

console.log(`Area with height: ${areaWithHeight}`);
console.log(`Area with angle: ${areaWithAngle}`);
