// ---- AWAIT ----
// -- proses yang dijalankan untuk menunda jalannya asynchronous hingga proses dari await tersebut bisa dieksekusi

function luckyDraw(){
    return new Promise((resolve, reject) => {
        console.log("---- UNDIAN DIMULAI ----")
        console.log("*mengambil undian*")
        let number = Math.floor(Math.random() * 30)
        console.log("Undian yang didapatkan adalah ", number)
        setTimeout(() => {
            if(number >= 25){
                resolve("Selamat, kamu berhasil jadi juara 1!")
            } else if(number >= 10 && number <= 24){
                resolve("Selamat, kamu berhasil jadi juara 2!")
            } else {
                reject("Sayang sekali, kamu belum berhasil. Jangan nyerah ya!")
            }
        }, 3000)
    })
}

async function playDraw(){
   await luckyDraw()
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("---- UNDIAN SUDAH SELESAI ----")
    })
}

function result(){
    console.log("cek hasil promise : ")
    playDraw()
    console.log("oke")
}

result()