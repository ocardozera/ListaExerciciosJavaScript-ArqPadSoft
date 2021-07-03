/*
11. Um professor de algoritmos está ensinando seus alunos a
implementarem árvores binárias e cobra o seguinte exercício:

“Implemente uma árvore binária cujo nó raiz seja um número qualquer. A
árvore deve conter um método para criar 2 nós folha à direita e à
esquerda do nó raiz, sendo ambos números quaisquer diferentes do
valor do nó raiz e a estrutura deve automaticamente colocar o maior
número informado à direita do nó raiz e o menor número informado à
esquerda.”

Implemente o exercício descrito acima usando as classes JavaScript.
Deverá haver uma classe “Folha”, uma classe “No” e uma classe
“Arvore”. A classe “Arvore” deve ser responsável por criar o nó raiz e
deve conter o método que cria os nós folha baseados nos critérios do
exercício descrito. Além disso, deve haver um modo de checar se o nó é
um nó folha ou não e na execução da aplicação teste devem haver
console.log’s informando o nó raiz e seus filhos e quais os tipos de cada
nó (nó ou nó folha). Use conceitos de OO tais como herança.
*/

//crio a arvore
let arvore = {
    noEsquerda: undefined,
    noDireita: undefined,
    valor: 5
}
