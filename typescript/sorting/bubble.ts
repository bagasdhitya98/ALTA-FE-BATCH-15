// --- BUBBLE SORT ---

// -- menggunakan nested loop untuk membandingkan element pertama dan selanjutnya
// -- ketika element pertama lebih besar daripada element selanjutnya, maka akan dilakukan pertukaran nilai
// -- ketika element pertama lebih kecil daripada element selanjutnya, maka dilakukan pertukaran posisi element pertama
// -- kekurangan : algoritma ini tidak cocok untuk data yang relatif besar, dikarenakan processing time yang lama

function sortBubble(arr: Array<number>){
    let len = arr.length
    let dupe = [...arr] // bikin duplikasi agar tidak mempengaruhi array aslinya

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(dupe[j] > dupe[j + 1]){
                // ketika element pertama lebih besar dari element selanjutnya, maka dilakukan pertukaran nilai
                let varDupe = dupe[j] // untuk menampung sementara hasil dari nilai dupe[]
                console.log("var Dupe : ",varDupe)
                dupe[j] = dupe[j + 1] // tukar nilai dupe[j] dengan nilai setelah dupe[j]
                console.log("dupe[j] : ",dupe[j])
                dupe[j+1] = varDupe // tukar nilai setelah dupe[j] dengan nilai yang sudah ditampung di varDupe
                console.log("dupe[j] + 1 : ",dupe[j+1])
                // console.log("hasil varDupe : ", varDupe)
            }
        }
    }
return dupe
}

const randomNumber: Array<number> = [22, 11, 56, 10, 23, 4, 90, 51, 86, 44, 28, 56]
console.log(sortBubble(randomNumber))