function escrevaMeuNome(nome){
    return ("meu nome e: " + nome);
}
escrevaMeuNome('hygor');

function maiorDeIdade(idade){
    if(idade < 18){
        console.log('voce e menor de idade');
    }else{
       console.log( escrevaMeuNome('hygor')+' eu sou mair de idade');
    }
}

maiorDeIdade(18);