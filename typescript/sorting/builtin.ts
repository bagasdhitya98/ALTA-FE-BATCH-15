function builtInSort(arr: Array<number>){
    const result = arr.sort((first,last) => {
        // return first - last // mengurutkan nilai dari element terkecil ke terbesar
       return last - first // mengurutkan nilai dari element terbesar ke terkecil
    })
    return result
}

const randArr: Array<number> = [11, 90, 20, 44, 12, 70, 33, 33, 22, 25, 89, 56, 50]
console.log(builtInSort(randArr))