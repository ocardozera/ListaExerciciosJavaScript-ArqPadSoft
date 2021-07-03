/*
9. Uma requisição a um servidor é feita, caso o valor enviado para o
servidor seja uma cadeia de caracteres, o mesmo devolve essa cadeia
de caracteres em caixa-alta, caso contrário um erro é devolvido
informando “the request value is not supported”. Implemente uma
Promise que simule o caso descrito e implemente um teste para o caso
de sucesso e de erro. Além disso, a simulação deve conter um atraso
aleatório de 500 milissegundo a 2 segundos, simulando o atraso da
comunicação com o servidor. Dica: pesquisar sobre a função
setTimeout.
*/

async function servidor(caracteres) {
    return new Promise((resolve, reject) => {    
        if (typeof caracteres === 'string') {
            resolve(caracteres.toUpperCase());
        } else {
            reject('The request value is not supported.')
        }
    });
}

function retornoServidor(data) {
    console.log(data);
}

function error(data) {
    console.log(data);
}


//Sucesso
setTimeout(function(){
    servidor("Conversor").then(retornoServidor, error);
}, (Math.random() * (2000 - 500)) + 500);

//Erro
setTimeout(function(){
    servidor(5).then(retornoServidor, error);
}, (Math.random() * (2000 - 500)) + 500);

