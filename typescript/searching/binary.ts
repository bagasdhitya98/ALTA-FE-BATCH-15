// ---- BINARY SEARCH ----

// --- menggunakan array yang sudah disortir secara ascending (dari element terkecil ke terbesar
// --- pencarian dimulai dari nilai tengah
// --- jika, element tengah itu lebih kecil dari target, maka geser ke kanan
// --- jika, element tengah itu lebih besar dari target, maka geser ke kiri
// --- jika target ditemukan, maka return index/posisi dari target yang ditemukan
// --- jika target tidak ditemukan, maka return -1

function binarySearch(arr: Array<number>, target: number): number{
    let first: number = 0
    let last: number = arr.length - 1

    while(first <= last){
        let middle = Math.floor((first + last)/2)
        console.log("middle : ", middle)
        if(arr[middle] === target){
            console.log("target middle : ", middle)
            return middle // return jika nilai tengah yang ditemukan adalah target
        } else if(arr[middle] < target){
            first = middle + 1 // lanjutkan pencarian dan geser element tengah ke kanan
            console.log("target first : ", first)
            return first
        } else {
            last = middle - 1 // lanjutkan pencarian dan geser element tengah ke kiri
            console.log("target last : ", last)
            return last
        }
    }
    return -1
}

const dupe1 = [8, 10, 14, 22, 30, 45, 50]

console.log(binarySearch(dupe1,30))
// console.log(binarySearch(dupe1, 45))