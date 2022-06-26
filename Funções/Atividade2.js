const pessoa= {
    nome: 'Maiko',
    idade: 28,
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log (calculaIdade.apply(pessoa, [14]));