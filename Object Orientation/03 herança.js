class EletronicDevices {
    constructor(name) {
        this.name = name;
        this.isOn = false;
    }

    turnOn() {
        if(this.isOn) console.log("device's arealy on");
        this.isOn = true;
    }

    turnOff() {
        if(this.isOn === false) console.log("device's arealy off");
        this.isOn = false;
    }
}

class Smartphone extends EletronicDevices {
    constructor(name, brand) {
        super(name);
        this.brand = brand
    }
}

const iphone = new Smartphone('iphoneXS MAX', 'Apple');

console.log(iphone.name);

iphone.turnOn();

console.log(iphone);