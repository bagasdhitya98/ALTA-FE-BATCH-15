// --- Contoh dari Synchronous
// -- biasa disebut blocking

// console.log("Hello guys")
// console.log("Mari kita belajar Typescript")
// console.log("Belajar Typescript itu mudah dan menyenangkan")

// --- Contoh dari Asynchronous
// -- biasa disebut non-blocking

console.log("Hello guys")
setTimeout(() => {
    console.log("Mari kita belajar Typescript")   
}, 3000)
console.log("Belajar Typescript itu mudah dan menyenangkan bukan")