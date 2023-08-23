
// CASE 1 : Menentukan tarif parkir berdasarkan kendaraan
const tarifMotor: number = 2500
const tarifMobil: number = 7000
const tarifBus: number = 15000
const tarifTruk: number = 25000

// -- IF

// if(tarifMotor > 2500){
//     console.log('Kemahalan coy')
// }
// if(tarifMotor == 2500){
//     console.log('Harga normal')
// }
// if(tarifMotor < 2500){
//     console.log('Terlalu murah')
// }

// --- FUNCTION
function sumNumber(): number {
    const numberX: number = 10
    const numberY: number = 20
    const sum: number = numberX + numberY
    return sum
}

// --- cara memanggil dengan -> sumNumber()
// --- return -> untuk mengembalikan nilai yang dihasilkan oleh fungsi tersebut
// console.log(sumNumber())
// console.log(sumNumber() + 5)

function sumNumberWithParam(numberX: number, numberY: number): number{
    const sum: number = numberX + numberY
    return sum
}

// --- penulisan parameter di dalam function Wajib berurutan
// --- misalkan, ada namaFunction(a,b,c), maka dari itu pemanggilnya harus menyertakan argumen dengan urutan parameter yang sesuai
// -- berarti argumen pemanggilnya harus namaFunction(1,2,3), tidak boleh cuma namaFunction()

// console.log(sumNumberWithParam(10,5)) // 10 sebagai argumen dari parameter numberX, sedangkan 5 sebagai argumen dari parameter numberY
// console.log(sumNumberWithParam(25, 15)) // 25 sebagai argumen dari parameter numberX, sedangkan 15 sebagai argumen dari parameter numberY
// console.log(sumNumberWithParam(11,3)) // 11 sebagai argumen dari parameter numberX, sedangkan 3 sebagai argumen dari parameter numberY

// --- FUNCTION (IF)
function checkParkingPrice(price: number): void{
    if(price == 2500){
        console.log("Harga parkir motor")
    }
    if(price >= 2500 && price <= 7000){
        console.log("Harga parkir mobil")
    }
    if(price > 7000){
        console.log("Harga parkir bus/truk")
    }
}

// checkParkingPrice(3000)
// checkParkingPrice(7500)

// --- FUNCTION(IF-ELSE)
// -- jika persyaratan if pertama tidak dipenuhi, maka akan langsung terlempar ke else

function checkNumber(numVar: number): string{
    if(numVar % 2 === 0){
        return "Bilangan Genap"
    } else {
        return "Bilangan Ganjil"
    }
}

// console.log(checkNumber(7))
// console.log(checkNumber(22))

// --- FUNCTION(ELSE-IF)
// -- jika persyaratan if pertama tidak dipenuhi, maka akan langsung dilempar ke else if
// -- jika persyaratan else if tidak dipenuhi, maka akan langsung dilempar ke else

function checkHour(hour: number): string{
    if(hour < 12){
        return "Halo, Selamat Pagi!"
    } else if (hour >= 12 && hour < 15){
        return "Halo, Selamat Siang!"
    } else if (hour >= 15 && hour <= 18){
        return "Halo, Selamat Sore!"
    } else {
        return "Halo, Selamat Malam"
    }
}

// console.log(checkHour(16))
// console.log(checkHour(10))
// console.log(checkHour(19))

// ---- NESTED IF
// -- jika persyaratan if pertama tidak dipenuhi, maka akan langsung terlempar ke block else

const v1 = 400
const v2 = 700

function checkVNumber(numberA: number,numberB: number): string{
    if(numberA === v1 ){
        if(numberB === v2){
            return "Nilai dari v1 adalah 400 dan v2 adalah 700"
        } else {
            return "Nilai dari numberB invalid"
        }
    } else {
        return "Nilai dari numberA invalid"
    }
}

// console.log(checkVNumber(400, 800))
// console.log(checkVNumber(500, 700))
// console.log(checkVNumber(400,700))

// ---- TERNARY OPERATOR

// --- tanda "?" mewakili IF
// --- tanda ":" mewakili ELSE

function checkAge(age: number): string{
    const canDrive = age > 17 ? "Boleh Menyetir" : "Tidak Boleh Menyetir"
    return canDrive
}

// console.log(checkAge(17))
// console.log(checkAge(25))

// ---- TERNARY OPERATOR WITH ELSE IF

function checkTemperature(temp: number): string{
    const result: string = temp > 36 ? "Kamu masih aman" : `${temp > 32 && temp <= 36 ? "Kamu normal" : "Kamu hipotermia"}`
    return result
}

// console.log(checkTemperature(33))
// console.log(checkTemperature(20))

// --- SWITCH CASE

function checkTrafficLight(signal: string): void{
    switch(signal){
        case "red":
            console.log("berhenti")
            break;
        case "orange":
            console.log("bersiap-siap")
            break;
        case "green":
            console.log("jalan")
            break;
        default:
            console.log("lampunya rusak")
            break
    }
}

// checkTrafficLight("orange")
// checkTrafficLight("green")
// checkTrafficLight("blue")

function checkGrade(score: number): void {
    switch(score){
        case 36 :
            console.log("cum laude")
            break;
        case 33 :
            console.log("good and excellent")
            break;
        case 30 :
            console.log("good")
            break;
        default :
            console.log("don't give up!")
            break
    }
}

// checkGrade(30)
// checkGrade(36)
// checkGrade(27)