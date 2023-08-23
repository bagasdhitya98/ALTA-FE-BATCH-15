// --- Jenis jenis looping di typescript/javascript
// 1. for loop
// 2. while loop
// 3. for in (object)
// 4. for of (array)
// 5. forEach
// 6. map --> akan sering dipake

// for loop : digunakan ketika kondisi awal, iterasi sudah jelas -> looping dijalankan berdasarkan kondisi awal, iterasi, dan increment/decrement
// while loop : digunakan ketika kondisi awal, iterasi belum jelas -> looping dijalankan berdasarkan kondisi saja

// --- FOR LOOP ---

// for(init kondisi awal; kondisi iterasi; kondisi akhir){

// }

// -- SINGLE LOOP --
function forLoopIncrement(num: number): void{
    for(let i = 5; i <= num; i++){
        console.log("result of increment : ", i)
    }
}

// forLoopIncrement(10)
// forLoopIncrement(20)

function forLoopDecrement(num: number): void {
    for(let i = 5; i >= num; i--){
        console.log("result of decrement : ", i)
    }
}

// forLoopDecrement(-5)
// forLoopDecrement(-2)
// forLoopDecrement(0)

function checkGanjilGenap(num: number): void {
    for(let i = 0; i <= num; i++){
        if(i % 2 === 0){
            console.log(i + " adalah bilangan genap")
        } else {
            console.log(i + " adalah bilangan ganjil")
        }
    }
}

// checkGanjilGenap(10)

// ---  NESTED FOR LOOP
// --- cara kerjanya berurutan
// --- mulai dari for ke-1, akan dilanjut ke for ke-2. dst
// --- cara kerjanya mirip nested if tapi versi looping

function nestedForLoop(num: number): void{
    for(let i = 0; i < num; i++){
        console.log("main looping : ", i)
        for(let j = 0; j < num; j++){
            console.log("sub looping : ",j)
        }
    }
}

// nestedForLoop(3)
// nestedForLoop(5)

// --- WHILE LOOP
// -- cara kerja while loop itu berdasarkan kondisiny

function whileLoop(start: number, end: number): void{
    while(start <= end){
        console.log("start : ", start)
        start++
    }
}

// whileLoop(20, 10)

function nestedWhile(num: number): void{
    let i = 0
    while(i < num){
        console.log("main looping : ", i)
        let j = 0
        while(j < num){
            console.log("sub looping : ", j)
            j++
        }
        i++
    }
}

// nestedWhile(3)

// --- DO WHILE LOOP ---
function doWhileLoop(num:number):void{
    let i = 0
    do {
        console.log(`cetak urutan nomor ke ${i}`)
        i++
    } while (i<num)
}

// doWhileLoop(10)

// --- NESTED DO WHILE
// -- cara kerjanya do while loop berurutan
// -- mulai dari do ke-1, do ke-2, dst
// -- do ke-2 dipengaruhi oleh do ke-1

function nestedDoWhile(num:number):void{
    let i = 0
    do {
        console.log("main looping : ", i)
        let j = 0
        do{
            console.log("sub looping : ", j)
            j++
        } while(j < num)
        i++
    } while (i < num)
}

// nestedDoWhile(3)