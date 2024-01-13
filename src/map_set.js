let meuMap = new Map();
meuMap.set("nome", "guilherme");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
  console.log(chave);
}

for (let valor of meuMap.values()) {
  console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
  console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

const cpfs = new Set();

cpfs.add("52856804845");
cpfs.add("02856804844");
cpfs.add("52856804849");

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
  console.log(valor);
});

const array = ['gabigol', 'rony', 'cristiano ronaldo', 'cristiano ronaldo', 'messi', 'rony'];

const arrayComoSet = new Set([...array]);

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);