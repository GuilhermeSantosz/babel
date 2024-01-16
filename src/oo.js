// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico")

class Pokemon {
  #hp = 100;

  constructor(nomeDoPokemon, tipoDoPokemon) {
    this.nome = nomeDoPokemon;
    this.tipo = tipoDoPokemon;
  }

  atacar(nomeDoAtaque) {
    console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
  }
  exibeHp() {
    console.log(this.#hp)
  }
}

class Pikachu extends Pokemon {
  constructor() {
    super('Pikachu', 'Elétrico')
  }

  atacar() {
    console.log(`${this.nome} atacou com choque do trovão`);
  }

  recebeuAtaque() {
    this.hp -= 10;
  }

} 

const pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuAtaque()
console.log(pikachuDoAsh.hp)
pikachuDoAsh.atacar()
const pikachu = new Pokemon("pikachu", "elétrico");

// pikachu.atacar("ataque do trovão");

console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);
