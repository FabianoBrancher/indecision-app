/* const square = function(x) {
    return x * x;
};

//const squareArrow = (x) => {
//    return x * x;
//}

// TODAS AS FUNÇÕES ARROW SÃO ANONIMAS
// QUANDO ESTAMOS TRABALHANDO COM A SINTAXE DE ARROW FUNCTION NÓS NAO USAMOS EXPLICITAMENTE O RETURN EM LUGAR ALGUM.
const squareArrow = (x) => x * x;

console.log(squareArrow(7)); */

/* const getFirstName = (fullName) => {
    if (fullName) {
        return fullName.split(' ')[0];
    }
} */

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('arrow function'));