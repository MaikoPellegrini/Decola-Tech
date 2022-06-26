function forInExemplo(obj){
    for(prop in obj) {
        console.log (obj[prop]);
    }
}
const meuObjeto = {
    nome: "MAiko",
    Idade: "28 Anos",
    Cidade: "Dois Vizinhos"
}
console.log (forInExemplo(meuObjeto));