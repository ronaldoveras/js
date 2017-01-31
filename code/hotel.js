function calcular(){
    var valorDiaria = 50;
    var qtdDias = document.getElementById('dias').value;
    var valorPagoTaxa = 0;
    if(qtdDias < 15){
        valorPagoTaxa = qtdDias * 2.5;
    } else if(qtdDias == 15) {
        valorPagoTaxa = qtdDias * 2;
    } else if(qtdDias > 15) {
        valorPagoTaxa = qtdDias * 1.5;
    } 
    document.getElementById('message').innerHTML='Valor total: ' + (qtdDias*50 + valorPagoTaxa) + '<br>' + 'Valor pago taxa: ' + valorPagoTaxa;
}