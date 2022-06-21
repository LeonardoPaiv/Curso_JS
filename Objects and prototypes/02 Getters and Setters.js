function Product(name, price, stock){
    this.name = name;
    this.price = price;

    let privateStock = stock

    Object.defineProperty(this, 'stock', {

        enumerable: true, // here we say that the stock will be showed 
        configurable: true, // here we set if this properties are configurables
        
        get: function() {
            return privateStock;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('bad value, please try a number')
                return;
            }

            privateStock = valor;
        }
    })
}

const p1 = new Product('tshirt', 10, 3);
p1.stock = 'xkjd';
console.log(p1.stock);