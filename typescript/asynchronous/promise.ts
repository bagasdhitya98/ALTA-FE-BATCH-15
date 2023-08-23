// --- PROMISE ---
// -- sebuah object yang merepresentasikan sebuah kejadian yang bisa terpenuhi
// -- atau gagal, berdasarkan pada operasi async dan bisa menghasilkan sebuah output

function generateRandom(){
    return new Promise((resolve, reject) => {
        let numberRandom: number = Math.floor(Math.random() * 20)
        console.log("Bilangan yang didapatkan : ", numberRandom)
        setTimeout(() => {
            if(numberRandom % 2 === 0){
                resolve("Bilangan Genap") // resolve pasangannya then
            } else {
                reject("Bilangan Ganjil") // reject pasangannya catch
            }
        }, 3000)
    })
}

generateRandom()
.then((response) => {
    console.log("Hasil menunjukkan bahwa, ini merupakan bilangan genap : ", response)
})
.catch((error) => {
    console.log("Hasil menunjukkan bahwa, ini merupakan bilangan ganjil : ", error)
})
.finally(() => {
    console.log("Generate Selesai!")
})