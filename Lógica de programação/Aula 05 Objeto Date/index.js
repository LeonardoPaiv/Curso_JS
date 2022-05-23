// função construtora, começão com letra maiuscula

//                    ano, mês, D, H,  M,  S,  milisegundos
const data = new Date(2019, 3, 20, 15, 14, 27, 100);
console.log(data.toString());
console.log();

// const pandemiaBrasil = new Date('2020-03-12 12:10:00');
// console.log(pandemiaBrasil.toString());

console.log('dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('dia da semana', data.getDay()); // 0 - domingo 6 - Sabado
console.log(data.toString());