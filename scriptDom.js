function CalcularMedia(){
// Declarando variaveis
let nomeAluno;
let nota1, nota2, nota3, nota4, media, soma;

// Entrada de dados do nome do aluno
nomeAluno = document.getElementById("nomeAluno").value;

// Entrada de dados das notas
nota1 = Number(document.getElementById("nota1").value);

nota2 = Number(document.getElementById("nota1").value);

nota3 = Number(document.getElementById("nota1").value);

nota4 = Number(document.getElementById("nota1").value);

soma = nota1+nota2+nota3+nota4;
media = soma/4;

document.getElementById("mediaAluno").value=media.toFixed(2);

if(media >= 7){
    document.getElementById("situacaoAluno").value="Aprovado";
}
else if(media >= 5){
    document.getElementById("situacaoAluno").value="Em recuperação";
}
else{
    document.getElementById("situacaoAluno").value="Reprovado";
}
}
CalcularMedia();
