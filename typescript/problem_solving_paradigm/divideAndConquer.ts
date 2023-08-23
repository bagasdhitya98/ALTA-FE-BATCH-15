// --- DIVIDE AND CONQUER ---
// --- bekerja dengan memecah masalah besar menjadi sub-masalah yang lebih kecil, kemudian diselesaikan secara rekursif
// --- lalu, menggabungkan solusi sub-masalah untuk memperoleh solusi masalah besar di awal

// -- CASE 1 : QUICK SORT

function quickSort(arr: Array<number>): Array<number> {
    if(arr.length <= 1){
        return arr
    }

    let pivot: number = arr[0]
    let left: Array<number> = []
    let right: Array<number> = []

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
            console.log("left : ", left)
            // jika index dari array kurang dari pivot, maka letakkan ke left
        } else {
            right.push(arr[i])
            console.log("right : ", right)
            // jika index dari array sama dengan atau lebih besar dari pivot, maka letakkan ke right
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

const randomArray: Array<number> = [20, 5, 8, 1, 3, 11, 19, 25, 15]
console.log(quickSort(randomArray))