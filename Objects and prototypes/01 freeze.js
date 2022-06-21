// you can freeze your object by using the object.freeze method

let pessoa = {
    name: 'Leonardo',
    sobrenome: 'Paiva'
}

Object.freeze(pessoa)

pessoa.name = 'Paulo'

console.log(pessoa.name);

// you also can frezze a property

function Product(name, price, stock){
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'stock', {
        enumerable: true, // here we say that the stock will be showed 
        value: stock, // here we say that the value is the one defined when we call the constructure
        writable: false, // here we are saying that the value isn't writable
        configurable: true // here we set if this properties are configurables
    })

    // here we define the configuration of any properties we want

    Object.defineProperties(this, {
        name: {
            enumerable: true, // here we say that the stock will be showed 
            value: name, // here we say that the value is the one defined when we call the constructure
            writable: false, // here we are saying that the value isn't writable
            configurable: true // here we set if this properties are configurables
        },
        price: {
            enumerable: true, // here we say that the stock will be showed 
            value: price, // here we say that the value is the one defined when we call the constructure
            writable: false, // here we are saying that the value isn't writable
            configurable: true // here we set if this properties are configurables
        }
    })
}

const productOne = new Product('notebook', 10, 5);

console.log(productOne);