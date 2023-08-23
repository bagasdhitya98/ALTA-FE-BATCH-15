const a: number = 10
const b: number = 20

const add: number = a + b
const sub: number = b - a
const mul: number = a * b
const div: number = b / a
const mod: number = a % b

// console.log(add)
// console.log(sub)
// console.log(mul)
// console.log(div)
// console.log(mod)

// --- INCREMENT & DECREMENT
let numA: number = 10
let numB: number = 10

// console.log(++numA)
// ++numA = 10 + 1
// console.log(--numB)
// --numB = 10 - 1

// -- typescript bisa menggunakan 2 atau lebih tipe data untuk mendeklarasikan sebuah data
const total: string = "100" + 100
// console.log(total)

// --- REASSIGNMENT

// = -> reassignment (memberikan nilai pada suatu variabel)
// == -> membandingkan antara kedua value nya aja
// === -> membandingkan antara kedua value sekaligus tipe datanya

const temp: string = "30"
const condition_one: boolean = temp == "30"
const condition_two: boolean = temp === "30"
const condition_three: boolean = temp != "30"
const condition_four: boolean = temp !== "30"

// console.log(condition_one)
// console.log(condition_two)
// console.log(condition_three)
// console.log(condition_four)

// --- GERBANG LOGIKA

// -- AND (&&)
// false + false = false
// false + true = false
// true + false = false
// true + true = true

// -- OR (||)
// false + false = false
// false + true = true
// true + false = true
// true + true = true

const statement_1: boolean = 30 < 33
const statement_2: boolean = 20 > 18
const statement_3: boolean = 50 < 48
const statement_4: boolean = 40 > 39
const statement_5: boolean = 12 > 17

// console.log(statement_1 && statement_4) --> true
// console.log(statement_2 && statement_1) --> true
// console.log(statement_3 && statement_1) --> false

// console.log(statement_5 || statement_2)
// console.log(statement_3 || statement_5)
// console.log(statement_2 || statement_1)

// -- SHORTHAND ARITMETHIC
let numberVar: number = 40

numberVar += 40 // numberVar = numberVar + 40
numberVar -= 40 // numberVar = numberVar - 40
numberVar *= 40 // numberVar = numberVar * 40
numberVar /= 40 // numberVar = numberVar / 40
numberVar %= 40 // numberVar = numberVar % 40