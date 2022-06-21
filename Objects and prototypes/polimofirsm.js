function Account(bank, account, money) {
    this.bank = bank;
    this.account = account;
    this.money = money;
}

Account.prototype.withdraw = function(value) {
    if(this.money < value) {
        console.log("You don't have this amount of money")
        this.checkMoney();
        return;
    }

    this.money -= value;
    this.checkMoney();
}

Account.prototype.deposit = function(value) {
    this.money += value;
    this.checkMoney();
};

Account.prototype.checkMoney = function() {
    console.log(`Bank/Account ${this.bank}/${this.account}`);
    console.log(`In this account you have a total of U$:${this.money.toFixed(2)}`);
};

const Account01 = new Account('0001', '32167', 5000);

// Account01.deposit(340);
// console.log();
// Account01.withdraw(6000);


function CheckingAcc(bank, account, money, limit) {
    Account.call(this, bank, account, money);
    this.limit = limit;
}

CheckingAcc.prototype = Object.create(Account.prototype);
CheckingAcc.prototype.constructor = CheckingAcc;

CheckingAcc.prototype.withdraw = function(value) {
    if((this.money + this.limit) < value) {
        console.log("You don't have this amount of money")
        this.checkMoney();
        return;
    }

    this.money -= value;
    this.checkMoney();
};

const myCC = new CheckingAcc('0012', '231323', 1000, 800);

myCC.deposit(100);
myCC.withdraw(1500);
