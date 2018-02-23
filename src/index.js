module.exports = function getZerosCount(number, base) {
  var factors = [],
               prime,
               power=1;
           function primeFactors(n){
               var divisor = 2;
               while(n>=2){
                   if(n % divisor === 0){
                       factors.push(divisor);
                       n= n/divisor;
                   }
                   else{
                       if(divisor%2===1){divisor+=2; continue}
                       divisor++;
                   }
               }
               return factors;
           }
           primeFactors(base);
           factors.sort(function(a,b){return b-a});
           prime = factors[0];
           function findPower(m){
               i=1;
               while(factors[i]===m){
                   power++;
                   i++;
               }
           }
           if(factors.length>1){
               findPower(prime);
           }
           var summands = [];
           i = 1;
           while (true){
               var devisor = Math.pow(prime,i);
               summands.push(Math.floor(number/devisor));
               i++;
               if(number/devisor<1){break;}
           }
           var answer = summands.reduce(function(a, b) {return a+b;}, 0);
           answer = Math.floor(answer/power);
           return answer;
}
