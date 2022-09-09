function fib(n){
    let sum = 0
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    sum += fib(n-1) + fib(n-2)
    return sum
     }