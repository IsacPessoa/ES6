const alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 7 },
    { nome: "Ana", nota: 9 },
    { nome: "Lucas", nota: 4 },
];

function filtrarAlunosAprovados(arrayDeAlunos) {
    const alunosAprovados = [];
    for (let i = 0; i < arrayDeAlunos.length; i++) {
        if (arrayDeAlunos[i].nota >= 6) {
            alunosAprovados.push(arrayDeAlunos[i]);
        }
    }
    return alunosAprovados;
}

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log("Alunos aprovados:");
console.log(alunosAprovados);