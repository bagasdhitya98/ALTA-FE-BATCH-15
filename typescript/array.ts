// ---- ARRAY ----

// bentuk array -> []

// --- Cara Mengakses Array ---
let devices: Array<string> = ["Smart Watch", "Tablet", "Handphone", "Headset", "Laptop"]
let yearProduction: Array<number> = [2019, 2020, 2021, 2022, 2023]
let combine: Array<string | number> = ["Toyota", 2018, "Honda", 2022, "Suzuki", 2021]

// console.log(devices[3])
// console.log(devices[0])
// console.log(yearProduction[1])
// console.log(yearProduction[4])
// console.log(typeof devices)
// console.log(typeof yearProduction)
// console.log(typeof combine)

// --- Menggantikan Element ---
devices[0] = "Drone" // menggantikan index ke 0 dari semula "Smart Watch" menjadi "Drone"
yearProduction[3] = 2024

// console.log(devices)
// console.log(yearProduction)

// --- Menambahkan Element dari Belakang Array
let fruits: Array<string> = ["Banana", "Orange", "Grape", "Mango", "Apple"]

// console.log("before added with push : ", fruits)
fruits.push("Strawberry")
// console.log("after added with push : ", fruits)

// --- Menghapus Element dari Belakang Array

// console.log("before deleted with pop : ", fruits)
fruits.pop()
// console.log("after deleted with pop : ", fruits)

// --- Menambahkan Element dari Depan Array

// console.log("before added with unshift : ", fruits)
fruits.unshift("Blueberry")
// console.log("after added with unshift : ", fruits)

// --- Menghapus Element dari Depan Array

// console.log("before deleted with shift : ", fruits)
fruits.shift()
// console.log("after deleted with shift : ", fruits)


// --- CLONE ARRAY
// -> copy array dapat menggunakan method slice() atau spread operator [...]

let colors: Array<string> = ["Red", "Magenta", "Polkadot", "Pink", "Blue", "Purple"]
let copyOfColors: Array<string> = colors.slice() // sudah menjadi entitas yang berbeda dari colors

// console.log("original data : ", colors)
// console.log("cloning data : ", copyOfColors)

// copyOfColors.unshift("Green")
// console.log(colors)
// console.log(copyOfColors)

let animals: Array<string> = ["Aves", "Reptil", "Mamalia", "Insect"]
let spreadOfAnimals: Array<string> = [...animals] // sudah menjadi entitas yang berbeda dari animals

// console.log("original data : ", animals)
// console.log("cloning data : ", spreadOfAnimals)


// ---- LOOPING ARRAY ----
let vehicles = ["Bus", "Motorcycle", "Car", "Truck", "Ship"]

function loopingFirst(){
    for(let i = 0; i < vehicles.length; i++){
        console.log(i) // -> hanya mengembalikan index
        console.log(vehicles[i]) // -> mengembalikan isi dari index
    }
}

// for of --> untuk mengambil value dari index
function loopingSecond(){
    for(let key of vehicles){
        console.log(key)
    }
}

// for in --> untuk mengambil index
function loopingThird(){
    for(let key in vehicles){
        console.log(key)
    }
}

// loopingFirst()
// loopingSecond()
// loopingThird()

// -- looping with map method
let members: Array<Object> = [
    {
        id: 1,
        name: "Upin",
        age: 5
    },
    {
        id: 2,
        name: "Fizi",
        age: 8
    },
    {
        id: 3,
        name: "Ipin",
        age: 5
    }
]

members.map((item: any, index: number) => {
    console.log(item.id)
    console.log(item.name)
    console.log(index)
})