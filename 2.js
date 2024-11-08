function numberChecker(num) {
    let count = 0;
    
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
            count++
            }
        }
        if (count == 0 && num > 1) {
            console.log(num + " - Простое число")

        } else if ((num == 0 || num == 1) || (num <= 1000 && count != 0)) {
            console.log(num + " - Непростое число")

        } else { console.log("Данные неверны")}
        
    }
  
numberChecker(9);