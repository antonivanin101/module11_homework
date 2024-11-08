function count(a,b) {
    let timer = setInterval(function() {
        if(a === b) {
            clearInterval(timer)
        }
        console.log(a)
        a++
    },1000)   
}

count(5,15)