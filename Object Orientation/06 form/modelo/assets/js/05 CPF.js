const _cpf = Symbol();
class Cpf {
    constructor(cpf) {
        this[_cpf] = cpf;
    }

    get cpf() {
        return this[_cpf];
    }

    validate() {
        const cleanCpf = this[_cpf].replace(/\D+/g, '')
        const parcialCpf = cleanCpf.slice(0,-2);
        
        const getdigits = (cpfminus) => {
            const cpfArray = Array.from(cpfminus);
            let multipliyer = cpfArray.length + 1

            const total = cpfArray.map(number => Number(number)
            ).reduce((ac, valor) => {
                ac += (valor * multipliyer);
                multipliyer--;
                return ac;
            }, 0);

            let digit = 11 - (total % 11);
            return digit > 9 ? '0' : String(digit);
    }

        const firstDigit = getdigits(parcialCpf);
        const secondDigit = getdigits((parcialCpf + firstDigit));
        const cpfFull = parcialCpf + firstDigit + secondDigit;



        if(cpfFull === cleanCpf) {
            console.log('CPF is valid');
            return true;
        }
    }
    
}

