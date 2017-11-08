var nameVar = 'Fabiano';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Gustavo';

console.log('nameLet: ', nameLet);

const nameConst = 'Marcela';
console.log('nameConst: ', nameConst);

function getPetName() {
    const petName = 'Hurry';
    return petName;
}

const petName = getPetName();
console.log(petName);

// Block Scoping

var fullName = 'Andrew Mead';
const firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
