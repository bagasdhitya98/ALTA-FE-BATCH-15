// ---- FACTORIAL RECURSIVE ----

// contoh bilangan faktorial
// !7 = 7 * 6 * 5 * 4 * 3 * 2 * 1
// !4 = 4 * 3 * 2 * 1

function searchFactorial(num: number): number{
    if(num == 1){
        return num
    } else {
        const factorial = num * searchFactorial(num - 1)
        return factorial
    }
}

// console.log(searchFactorial(7))
// console.log(7 * 6 * 5 * 4 * 3 * 2 * 1)
// console.log(searchFactorial(10))
// console.log(10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)

function searchExponent(base: number, expo: number): number{
    if(expo == 0){
        return 1
    } else {
        return base * searchExponent(base, expo - 1)
    }
}

console.log(searchExponent(3,2))
console.log(3*3)
console.log(searchExponent(8,2))
console.log(8*8)
console.log(searchExponent(3,3))
console.log(3*3*3)