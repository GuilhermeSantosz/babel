function funcaoPesada() {
  let execucoes = 0;
  for (let i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}

const funcaoPesadaPromise = new Promise((resolve, reject) => {
  try {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    reject("Deu erro na iteração dos números");
  }
})

const promeiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

async function execucaoPrincipal() {
    console.log("inicio");

    // await funcaoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    promeiseComParametros('guilherme@gmail.com', 123456).then(resultado => {
        console.log(resultado);
    })
    
    try {
        const resultado = await funcaoPesadaPromise;
        console.log(resultado);    
    }catch(e) {
        console.log(e)
    }


    console.log("fim");
}

execucaoPrincipal()