function calcular() { 

  var nt1 = parseFloat(document.querySelector(".nota1").value)
  var nt2 = parseFloat(document.querySelector(".nota2").value)
  var nt3 = parseFloat(document.querySelector(".nota3").value)
  var nt4 = parseFloat(document.querySelector(".nota4").value)
  var ntfinal = (nt1 + nt2 + nt3 + nt4) / 4

  var saida = document.querySelector(".saida")
  saida.innerHTML = "A média é " + ntfinal
}  













  /*   // Variaveis
var nome =  'Wilgner'
var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 6
var notaDoTerceiroBimestre = 7
var notaDoQuartoBimestre = 7

  //Soma e divisão das notas
var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4 

var notaFixada = notaFinal.toFixed(1)

  //Consoles
console.log('Bem-vindo ' + nome)
console.log(notaFixada)

if (notaFinal >=7){
  console.log ("APROVADO")

}
else{ (notaFinal <7)
  */