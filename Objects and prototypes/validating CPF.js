function ValidateCPF(cpf) {

    Object.defineProperty(this, 'cleanCpf', {
        enumerable: false,
        get: function() {
            return cpf.replace(/\D+/g, '');
        }
    });
}

ValidateCPF.prototype.validate = function() {
    if(typeof this.cleanCpf === 'undefined') return false;
    if(this.cleanCpf.length !== 11) return false;
    if(this.isSequence()) return false;

    const parcialCpf = this.cleanCpf.slice(0,-2);
    const firstDigit = this.createDigit(parcialCpf);
    const secondDigit = this.createDigit(parcialCpf + firstDigit);

    const newCPF = parcialCpf + firstDigit + secondDigit;

    return newCPF === this.cleanCpf;
}

ValidateCPF.prototype.createDigit = function(parcialCpf) {
    const cpfArray = Array.from(parcialCpf);

    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, value) => {
        ac += (regressive * Number(value));
        regressive--;
        return ac;
    }, 0);

    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
};

ValidateCPF.prototype.isSequence = function() {
    const sequence = this.cleanCpf[0].repeat(this.cleanCpf.length);
    return sequence === this.cleanCpf;
}

const cpf = new ValidateCPF('705.484.450-52');

console.log(cpf.validate());
