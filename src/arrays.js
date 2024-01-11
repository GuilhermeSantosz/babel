const redesSociais = ['Facebook', 'Instagram', 'X'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function (nomeDaRedeSocial, indice){
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'FrontEnd' 
    }
})
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

console.log(alunos2)

const paula = alunos2.find(function(item){
    return item.nome == 'Paula' //true ou false
})

const IndiceDaPaula = alunos2.findIndex(function(item){
    return item.nome == 'Paula' //true ou false
})

// every 
const todosAlunosSãoFrontend = alunos2.every(function(item) {
    return item.curso === 'FrontEnd' 
})


console.log(todosAlunosSãoFrontend)

const existeAlgumAlunoDeBackend = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'FrontEnd'
})

console.log(existeAlgumAlunoDeBackend)

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend'
 }

const alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackend)

console.log(alunosDeBackEnd)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual
    return acumulador
}, 0)

console.log(soma)

let somaComFor = 0

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i]
}

console.log(somaComFor)

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')

console.log(nomesDosAlunos)