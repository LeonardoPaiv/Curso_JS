class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    getFullName() {
        console.log(`${this.name} ${this.lastName}`);
    }
}

const p1 = new Person('Leonardo', 'Paiva');

p1.getFullName();