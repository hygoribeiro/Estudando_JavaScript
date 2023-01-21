function aplicandoDesconto(valor,desconto){
    return (valor - (valor * (desconto / 100))); 
}
function aplicandoJuros(valor,juros){
    return (valor + (valor * (juros / 100)));
}

const produto = 50;
const pagamento = 2;

if(pagamento === 1){
    console.log('valor da compra com o desconto e ' + (aplicandoDesconto(produto , 5)));
}else if(pagamento === 2){
    console.log('valor da compra com o desconto e ' + (aplicandoDesconto(produto , 15)));
}else if (pagamento === 3){
    console.log('valor da compra e de ' + produto);
            
}else{
    console.log('valor da compra e de ' + (aplicandoJuros(produto,10)));
}
        
    






