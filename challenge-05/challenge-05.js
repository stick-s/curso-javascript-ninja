/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ function () {}, 1, undefined, NaN, null, {} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunc (array) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunc(myArray)[2];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function showElement (array, index) {
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [ "string", 1, 0.1, undefined, NaN ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
showElement(myArray2, 0);
showElement(myArray2, 1);
showElement(myArray2, 2);
showElement(myArray2, 3);
showElement(myArray2, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (bookName) {
    var book = {
        "Dom Quixote": {
            quantidadePaginas: 100,
            autor: "Desconhecido",
            editora: "edipro"
        },
        "Gerra e Paz": {
            quantidadePaginas: 200,
            autor: "Desconhecido",
            editora: "edia"
        },
        "Manual de Persuasao do FBI0": {
            quantidadePaginas: 300,
            autor: "Desconhecido",
            editora: "unknow"
        }
    };
    if (bookName === undefined)
        return book;
    return book[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro Dom Quixote tem " + book("Dom Quixote").quantidadePaginas + " paginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Dom Quixote é " + book("Dom Quixote").autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Dom Quixote foi publicado pela editora " + book("Dom Quixote").editora);