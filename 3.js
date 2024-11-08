function one(a) {
    return function two(b) {
       return console.log(a + b)
    }
}
one(1)(2)