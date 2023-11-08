var  N = 8
var soma = 0;

for (var i = 1; i < N; i++) {
  soma += i;
}
console.log ("Número:" + i);


var i = 0;
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