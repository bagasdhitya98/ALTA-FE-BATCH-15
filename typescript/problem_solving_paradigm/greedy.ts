// ---- GREEDY ALGORITHM ----
// --- greedy bekerja dengan cara membuat segala kemungkinan, dan memilih kemungkinan yang paling optimal untuk menyelesaikan suatu problem

type Coins = {
    coins: number[],
    target: number
}

function findMinimumCoins(item: Coins): number[]{
    const sortedCoins: number[] = item.coins.sort((a, b) => b - a)
    const result: number[] = []
    let remainValue = item.target

    for(let coin of sortedCoins){
        console.log("coin yang sudah disortir : ", sortedCoins)
        console.log("jumlah coin : ", coin)
        while(remainValue >= coin){
            result.push(coin)
            remainValue = remainValue - coin
            console.log("hasil coin kemungkinan yang bisa dibentuk : ", result)
            console.log("nilai sekarang : ", remainValue)
        }
    }
    return result
}

const objective: Coins = {
    coins: [1, 10, 15, 25],
    target: 42
}

console.log(findMinimumCoins(objective))