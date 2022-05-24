// o THIS está se referindo a quem chamou ele, nesse primeiro caso é a p1

function criaPessoa(nome, sobnrenome, a, b) {
    return {
        nome,
        sobnrenome,
        tempo: 80,

        get nomeCompleto () {
            return `${this.nome} ${this.sobnrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobnrenome = valor.join(' ');
        },

        get dadoscompletos() {
            return `${nome} ${sobnrenome}, peso: ${this.peso}, altura: ${this.altura}, imc: ${this.imc}`
        },

        fala: function(assunto) { // fala é um metodo
            return `${nome} está ${assunto} há ${this.tempo} horas`   // nesse caso p1 possui um obj e nele a chave tempo é definida
        },

        peso: a,
        altura: b,

        get imc() { // IMC é um metodo.    Se eu uso get ele passa a ter comportamento de atributo
            const indice = this.peso / (this.altura ** 2)
            return indice
        }
    }
}

const p1 = criaPessoa('luiz', 'otavio', 55, 1.7);
console.log(p1.fala('falando sobre a aula'));
console.log(p1.imc)
console.log(p1.dadoscompletos)
p1.nomeCompleto = 'Leonardo de Paiva Rêgo'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobnrenome)