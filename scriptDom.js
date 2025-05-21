function CalcularMedia() {
    // Declarando variáveis
    let nomeAluno; // Variável para armazenar o nome do aluno
    let nota1, nota2, nota3, nota4, media, soma; // Variáveis para armazenar as notas, soma e média
  
    // Entrada de dados do nome do aluno
    nomeAluno = document.getElementById("nomeAluno").value; // Obtém o valor do campo de texto com id 'nomeAluno'
  
    // Entrada de dados das notas
    nota1 = Number(document.getElementById("nota1").value); // Obtém o valor do campo de texto com id 'nota1' e converte para número
    nota2 = Number(document.getElementById("nota2").value); // Obtém o valor do campo de texto com id 'nota2' e converte para número
    nota3 = Number(document.getElementById("nota3").value); // Obtém o valor do campo de texto com id 'nota3' e converte para número
    nota4 = Number(document.getElementById("nota4").value); // Obtém o valor do campo de texto com id 'nota4' e converte para número
  
    // Calculando a soma e a média
    soma = nota1 + nota2 + nota3 + nota4; // Soma todas as notas
    media = soma / 4; // Calcula a média dividindo a soma por 4
  
    // Exibindo a média no campo de texto com id 'mediaAluno'
    document.getElementById("mediaAluno").value = media.toFixed(2); // Exibe a média com 2 casas decimais
  
    // Condicional para determinar a situação do aluno
    if (media >= 7) {
      // Se a média for maior ou igual a 7, o aluno é aprovado
      document.getElementById("situacaoAluno").value = "Aprovado"; // Exibe 'Aprovado' no campo de texto com id 'situacaoAluno'
    } else if (media >= 5) {
      // Se a média for maior ou igual a 5, mas menor que 7, o aluno está em recuperação
      document.getElementById("situacaoAluno").value = "Em recuperação"; // Exibe 'Em recuperação' no campo de texto com id 'situacaoAluno'
    } else {
      // Se a média for menor que 5, o aluno está reprovado
      document.getElementById("situacaoAluno").value = "Reprovado"; // Exibe 'Reprovado' no campo de texto com id 'situacaoAluno'
    }
  }
  
  // Chama a função CalcularMedia para calcular a média e a situação do aluno
  CalcularMedia(); // Chama a função para executar o cálculo

function ExecutarTestes(){
    // Pegar conteúdo de um elemento de formulário utilizando ID
    let conteudoInput = document.getElementById("nomeAluno").value;
    // Pegar o elemento de formulário utilizando ID
    let input = document.getElementById("nomeAluno");
    // Pegar conteúdo de um elemento  de formulário utilizando classe
 let nota4 = document.getElementsByClassName("form__textbox")[4].value;
 
 
 let nota2 = document.getElementsByTagName("input")[2].value;
 
 document.getElementsByTagName("p")[0].innerHTML = "avaliação final  do aluno";
 const ul = document.getElementById("lista");
 
 ul.innerHTML = "<li> item </li>" ;
//  alert(conteudop);
 

document.getElementsByTagName("p")[0].style.color = "red";

    document.getElementsById("form").style.backgroundColor = "blue";


    document.querySelector("#nomeAluno");
    document.querySelector("p");
    document.querySelector(".form__textbox");



    document.querySelectorAll("#nomeAluno");
    document.querySelectorAll("p");
    document.querySelectorAll(".form__textbox");
}
