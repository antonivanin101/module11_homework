const massiv = [1,1,2,2,0,0,null,null,undefined,undefined,'hello','world',true,false]
function evenOddNumbers () {
    let even = 0,odd = 0,zero = 0,other = 0;

    massiv.forEach((el) => {
        if (el % 2 === 0 && el !== null && typeof el !== 'boolean') {
            even++
        }
        if (el % 2 !== 0 && typeof el === 'number') {
            odd++
        }
        if (el === 0) {
            zero++
        }
        if (typeof el !== 'number') {
            other++
        }
    })
console.log(`Четных чисел - ${even}`)
console.log(`Нечетных чисел - ${odd}`)
console.log(`Нулей - ${zero}`)
console.log(`Другие значения - ${other}`)                                            
}

evenOddNumbers(massiv)