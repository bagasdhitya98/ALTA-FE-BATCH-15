// --- COMPARE BETWEEN VAR, LET, AND CONST

// CAMEL CASE : fullName, secondName --> untuk memberi nama pada variabel
// PASCAL CASE : FullName, SecondName
// SNAKE CASE : full_name, second_name

// -- Var

// Case #1 : Reassign
// var alphabet: string = "abcd"
// var alphabet: string = "defg"
// console.log(alphabet)

// Case #2 : Hoisting
// numberVar = 10
// var numberVar: number
// console.log(numberVar)

// Case #3 : Scope
// var numberX: number = 7
// if(true){
//     var numberX: number = 9
// }
// console.log(numberX)

// -- Let

// Case #1 : Reassign
// let fruit: string = "mango"
// let fruit: string = "banana"
// console.log(fruit)

// Case #2 : Hoisting
// randomNumber = 17
// let randomNumber: number
// console.log(randomNumber)

// Case #3 : Scope
// let age: number = 20
// if(true){
//     let age: number = 10
// }
// console.log(age)

// -- Const

// Case #1 : Reassign
// const key: number = 27
// key = 27
// console.log(key)

// Case #2 : Hoisting
// numberX = 10
// const numberX: number
// console.log(numberX)

// Case #3 : Scope
// const key: number = 12345
// if(true){
//     const key: number = 789
// }
// console.log(key)

// --- TIPE DATA PRIMITIVE ---
let strVar: string = "Hello World"
let intVar: number = 123456789
let unVar: undefined = undefined
let nullVar: null = null
let booleanVar: boolean = true

// ------- STRING
// penggabungan dua string berbeda
let firstName: string = "John"
let secondName: string = "Doe"
let fullName: string = firstName + secondName
// console.log("full name without spacing : ",fullName)
// console.log("full name with spacing : ", firstName + " " + secondName)

// menghitung panjang sebuah kalimat
let namePlaceholder: string = "lorem ipsum"
// console.log("length of namePlaceholder is : ", namePlaceholder.length)

// periksa tipe data
let varNumber: number = 120
let varString: string = "abcd"
let varBoolean: boolean = true
// console.log("type data of varNumber is : ", typeof varNumber)
// console.log("type data of varString is : ", typeof varString)
// console.log("type data of varBoolean is : ", typeof varBoolean)

// menyisipkan number ke string
let age: number = 18
// console.log(typeof `Hello, my age ${age}`)


// ------- BOOLEAN
let condition_1: boolean = true
let condition_2: boolean = false
// console.log("kondisi 1 : ",condition_1)
// console.log("kondisi 2 : ",condition_2)

let compare_1 = 5 > 3
let compare_2 = 10 < 20
let compare_3 = 30 < 12
// console.log(compare_1)
// console.log(compare_2)
// console.log(compare_3)