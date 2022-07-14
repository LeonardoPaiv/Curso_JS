/* eslint-disable */

let nome: string = 'leo';
let idade: number = 22;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-simbolo');
// let big: bigint = 10n;


// Arrays

let arrayOfNumber: Array<number> = [1,2,3,4];
let arrayOfStrings: string[] = ['leo', 'joão'];

// Func

function soma(x: number, y: number): number {
    return x + y;
}

const multi: (x: number, y: number) => number = (x, y) => x * y;


const num10 = multi(2, 5);

console.log(num10);

