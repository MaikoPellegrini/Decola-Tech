const retornaNome = function () {
    return this.nome;
}

let Maiko = retornaNome.bind({ nome: 'Maiko'});

console.log(Maiko());