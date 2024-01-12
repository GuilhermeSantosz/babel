"use strict";

var redesSociais = ['Facebook', 'Instagram', 'X'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'FrontEnd'
  };
});
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
console.log(alunos2);
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; //true ou false
});
var IndiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; //true ou false
});

// every 
var todosAlunosSãoFrontend = alunos2.every(function (item) {
  return item.curso === 'FrontEnd';
});
console.log(todosAlunosSãoFrontend);
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'FrontEnd';
});
console.log(existeAlgumAlunoDeBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
var filtraAlunosDeBackend2 = function filtraAlunosDeBackend2(aluno) {
  return aluno.curso === 'Backend';
};
var alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackEnd);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);