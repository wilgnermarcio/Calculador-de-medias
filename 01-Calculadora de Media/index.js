function calcular() { 
  //Variavel das notas
  var nt1 = parseFloat(document.querySelector(".nota1").value)
  var nt2 = parseFloat(document.querySelector(".nota2").value)
  var nt3 = parseFloat(document.querySelector(".nota3").value)
  var nt4 = parseFloat(document.querySelector(".nota4").value)
  
  // Soma e divisão das notas
  var ntfinal = (nt1 + nt2 + nt3 + nt4) / 4

  var saida = document.querySelector(".saida")
  saida.innerHTML = "A média é " + ntfinal
}  
