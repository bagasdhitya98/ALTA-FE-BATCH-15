// --- LINEAR SEARCH ---

// --- pakai konsep looping atau perulangan
// --- mencari mulai dari element pertama sampai target ditemukan/element terakhir
// --- return index jika target ditemukan
// --- return -1 jika target tidak ditemukan

function linearSearch(arr: Array<number>, target: number): number{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

const random: Array<number> = [9, 3, 11, 30, 24, 28]
console.log(linearSearch(random, 23))
console.log(linearSearch(random, 24))