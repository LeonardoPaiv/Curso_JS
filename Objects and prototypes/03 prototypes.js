function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}


Person.prototype.fullName = function() {
    return this.name + ' ' + this.lastName
}

const p1 = new Person('leo', 'Paiva', 21);

console.log(p1.fullName());


// chain of prototypes

const objA = {
    keyA: 'A'
}

const objB = {
    keyB: 'B'
}

const objC = {
    keyC: 'C'
}

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.keyB);
console.log(objC.keyA);
