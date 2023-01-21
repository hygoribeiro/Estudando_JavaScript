//IMc

function calculoImc(peso,altura){
    return peso/(altura**2)
};


function classicicarImc(calculo){
    if( calculo < 18.5){
        return('abaixo do peso');

    }else if( calculo >= 18.4 && calculo <= 25){
        return('peso normar');

    }else if( calculo >=30 && calculo<=40){
        return('obeso');

    }
    else{
        return('obesidade grave');

    }
    
};

(function main(){
    const altura = 1.80;
    const peso = 100;
    const calculo = calculoImc(peso, altura);
    console.log(classicicarImc(calculo));
})();

