const alunos = [
{
    nome: 'Ana',
    nota: 7,
    turma: '1B',
},
{
    nome: 'Joao',
    nota: 8,
    turma: '2B',
},
{
    nome: 'Pedro',
    nota: 5,
    turma: '1A',
},
{
    nome: 'Paulo',
    nota: 5.5,
    turma: '1C',
},
{
    nome: 'Maria',
    nota: 9,
    turma: '3A',
},
];
function alunosAprovados(arr, media) {
    let aprovados = [];

       for (let i = 0; i < arr.length; i++) {
        let {nome, nota} = alunos[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}
function alunosReprovados(arr, media) {
    let reprovados = [];

       for (let i = 0; i < arr.length; i++) {
        let {nome, nota} = alunos[i];

        if (nota < media) {
            reprovados.push(nome);
        }
    }
    return reprovados;
}


console.log ("Alunos Aprovados: " + alunosAprovados(alunos, 7));
console.log ("Alunos Reprovados: " + alunosReprovados(alunos, 7));