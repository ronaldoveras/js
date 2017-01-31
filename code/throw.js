function getMes(indice){
    indice--;
    var meses = ['Jan','Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    if(meses[indice]){
        return meses[indice];
    } else {
        throw 'Mes Invalido';
    }
}

try {
    console.log(getMes(9));
} catch (error) {
    console.log(error);
} finally {
    console.log('Esta mensagem sempre será exibida.');
}