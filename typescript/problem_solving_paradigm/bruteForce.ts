// --- BRUTE FORCE ---
// -- algoritma yang bekerja dengan mencoba berbagai macam kemungkinan/probabilitas dalam menyelesaikan suatu masalah

// Case 1

function isPrime(num: number): boolean {
    if(num < 2){
        return false
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

function bruteForcePrime(max: number): Array<number> {
    const prime: Array<number> = []
    for(let i = 2; i <= max; i++){
        if(isPrime(i)){
            prime.push(i)
        }
    }
    return prime
}

// console.log(bruteForcePrime(20))

// Case 2

function bruteForceDuplicate(arr: Array<string>): Array<string> {
    const duplicate: Array<string> = []

    for(let i = 0; i < arr.length; i++){
        console.log("looping pertama : ", i)
        for(let j = i + 1; j < arr.length; j++){
            console.log("looping kedua : ", j)
            if(arr[i] === arr[j] && !duplicate.includes(arr[i])){
                duplicate.push(arr[i])
                console.log("hasil penemuan duplikasi : ", duplicate)
            }
        }
    }
    return duplicate
}

const fruites: Array<string> = ["apple", "apple", "banana", "strawberry", "blueberry", "blueberry"]
console.log(bruteForceDuplicate(fruites))