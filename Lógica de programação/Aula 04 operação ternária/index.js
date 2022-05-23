// ? resultado da condição true : resultado da condição false
const pontuaçãoUsuario = 1001;
const nivelIusuario = pontuaçãoUsuario >= 1000 ? ('Usuário VIP') : ('Usuário normal');

console.log(nivelIusuario);
console.log();

const corUsuario = 'pink'
const corPadrão = corUsuario || 'preto';

console.log(corPadrão);

// if  (pontuaçãoUsuario >= 1000) {
//     console.log('Usuário vip');
// } else {
//     console.log('Uusario normal');
// }