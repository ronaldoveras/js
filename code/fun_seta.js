var a = ['Hidrogênio', 'Hélio', 'Lítio', 'Berílio'];
console.log(a.map(function(s) {return s.length;}));
console.log(a.map(s => s.length));

var alunos = [8,4,10,5,7];
var aprovados1 = alunos.filter(a=> a >=7);
console.log(aprovados1);