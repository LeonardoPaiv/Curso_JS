export function somar(...args: number[]): number {
    return args.reduce((ac, valor) => ac + valor, 0);
}

const num10 = somar(1, 2, 3, 4, 5, 6, 7);

console.log(num10);

export function toUpperCase(...args: string[]): string[] {
    return args.map((value) => value.toUpperCase());
}

const nomeMaiusculo = toUpperCase('leonardo', 'barbara');

console.log(nomeMaiusculo);
