// --- FIBO DYNAMIC PROGRAMMING ---

function fiboDp(num: number): number{
    if(num <= 1){
        return num
    }

    let fiboIMinSatu = 1
    let fiboIMinDua = 0
    let fiboI = -1

    for(let i = 2; i <= num; i++){
        fiboI = fiboIMinSatu + fiboIMinDua
        console.log("fibo I : ", fiboI)
        fiboIMinDua = fiboIMinSatu
        console.log("fibo I Min Dua : ", fiboIMinDua)
        fiboIMinSatu = fiboI
        console.log("fibo I Min Satu : ", fiboIMinDua)
    }

    return fiboI
}

// console.log(fiboDp(7)) // 0 1 1 2 3 5 8 13
// console.log(fiboDp(6)) // 0 1 1 2 3 5 8

// --- FIBO BOTTOM UP ---

function fiboBottomUp(num: number): number {
    let memo: Array<number> = []

    for(let i = 0; i <= num; i++){
        if(i <= 1){
            memo[i] = i
            console.log("memo i : ", memo[i])
            // jika i kurang dari atau sama dengan 1, maka memo[i] = i
        } else {
            memo[i] = memo[i - 1] + memo[i - 2]
            console.log("memo i : ", memo[i])
            // jika i lebih dari atau sama dengan 1, maka memo[i] = memo[i - 1] + memo[i - 2]
        }
    }
    return memo[num]
}

console.log(fiboBottomUp(7)) // 0 1 1 2 3 5 8 13
// console.log(fiboBottomUp(6)) // 0 1 1 2 3 5 8