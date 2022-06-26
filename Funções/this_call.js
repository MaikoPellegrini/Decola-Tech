const myObj = {
    num1: 2,
    num2: 4,
};
function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b)
}

soma.call(myObj, [5, 1]); //apply é ussado array

const pessoa = {
    nome: 'Maiko',
};

const animal = {
    animal: 'Cão',
};
function getSomeThing() {
    console.log(this.nome)
}

console.log(getSomeThing.apply(pessoa));