const _speed = Symbol();

class Car {
    constructor(name, speedLimit, acceleration) {
        this.name = name;
        this[_speed] = 0;
        this.speedLimit = speedLimit;
        this.acceleration = acceleration;
    }

    get speed() {
        return this[_speed];
    }

    set speed(valor) {
        if(typeof valor !== 'number') return;
        if(valor > this.speedLimit || valor < 0) return;
        this[_speed] = valor;
    }

    accelerate() {
        if((this[_speed] + this.acceleration) >= this.speedLimit) return this[_speed] -= ((this[_speed] + this.acceleration) - this.speedLimit) - this.acceleration;
        this[_speed] += this.acceleration;
    }

}

const bmw = new Car('ix', 300, 20);

for (let i = 0; i <20; i++) {
    bmw.accelerate();
    console.log(bmw.speed);
}

bmw.speed = 1500;
console.log(bmw.speed);

bmw.speed = 50;
console.log(bmw.speed);