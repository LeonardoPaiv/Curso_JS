function Product(name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
}

let money = 0;

Product.prototype.sell = function(amount) {
    this.amount -= amount;
    return money += amount * this.price
}

// first way

const t_shirt = new Product('t-shit', 50, 150);

t_shirt.sell(10);
console.log(t_shirt);
console.log(money);

// second way

const cap = {
    name: 'cap',
    price: 12,
    amount: 100
};

Object.setPrototypeOf(cap, Product.prototype);

cap.sell(2);

console.log(cap, `your money now is ${money}`);


// third way


const shoes = Object.create(Product.prototype, {
    name: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 'nike shoes'
    },
    price: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 120
    },
    amount: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 20
    }
});

console.log(shoes);

shoes.sell(1);

console.log(shoes, `your money now is ${money}`);