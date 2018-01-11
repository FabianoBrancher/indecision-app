// arguments objects - no longer bound with arrow functions

/* const add = function(a, b) {
    console.log(arguments);
    return a + b;
} */

const add = (a, b) => {
    // console.log(arguments);
    // acontece erro pois nao temos mais acesso aos argumentos em arrow functions
    return a + b;
}
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Gustavo',
    cities: [
        'Chapecó',
        'Itapema',
        'Maringá'
    ],
/*     printPlacesLived: function() {

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    } */
    // Acontecera erro pois o this não está mais ligado ao objeto quando usamos arrow functions
    /* printPlacesLived: () => {
        
                this.cities.forEach((city) => {
                    console.log(this.name + ' has lived in ' + city);
                });
    } */

    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
/*         this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
 */    }
    
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    numbers: [3, 9, 14],
    mutiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.mutiplyBy);
    } 
};










console.log(multiplier.multiply()); //[1, 2, 3] 2 [2, 4, 6]




















