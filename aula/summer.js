var  N = 8
var soma = 0;

for (var i = 1; i < N; i++) {
  soma += i;
}
console.log ("Número:" + i);


var i = 1;
var soma= 0
while (i <= 8) {
    console.log("Contagem: " + i);
i++;
    }

    function factorial(num) {
       
        if (num < 0) {
          return "Não é possível calcular o fatorial de um número negativo";
        }
      
  
        let result = 2;
      
       
        for (let i = num; i >= 1; i--) {
          result *= i;
        }
      
        return result;
      }
      
      
      console.log(factorial(5)); //


      var contador = 1
      var soma = 0 

    while ( contador <= 5){       soma = soma + contador
         contador = contador + 1}