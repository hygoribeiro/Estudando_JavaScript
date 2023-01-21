const nota1 = 9;
const nota2 = 3;
const nota3 = 4;

let calculo = (nota1+nota2+nota3)/3;

if (calculo < 5) {
    console.log('aluno reprovado sua media foi de '+calculo.toFixed(2));
} else if (calculo > 7) {
    console.log('aluno aprovado,Parabens sua media foi de '+calculo.toFixed(2))
}else{
    console.log('aluno estar de recuperção sua media foi de '+calculo.toFixed(2));
}
