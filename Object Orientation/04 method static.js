class Contoler {
    constructor(device) {
        this.device = device;
        this.volume = 0;
    }

    volumeUP() {
        if(this.volume >= 100) return
        this.volume++;
    }

    volumeDOWN() {
        if(this.volume <= 0) return
        this.volume--;
    }

    static somar(x, y) {
        return x + y;
    }
}


const smartphone = new Contoler('smartphone');
const pc = new Contoler('PC');
const tv = new Contoler('TV');

for (let i = 0; i < 110; i++) pc.volumeUP();

console.log(smartphone.volume);
console.log(pc.volume);
console.log(tv.volume);

console.log(Contoler.somar(10, 5));