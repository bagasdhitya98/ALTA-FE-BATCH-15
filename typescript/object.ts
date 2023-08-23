// ---- OBJECT ----

// -- gunakan salah satu untuk mendefinisikan tipe data Object
// let pet: Object = {}
// let pet: {} = {}

// --- Mengakses sebuah key di dalam object
let car: {type: string, color: string, year: number} = {
    type: "sedan", // "type" adalah sebuah key yang menyimpan value "sedan"
    color: "red", // "color" adalah sebuah key yang menyimpan value "red"
    year: 2022 // "year" adalah sebuah key yang menyimpan value 2022
}

// console.log("type of car is : ", car?.type)
// console.log("color of car is : ", car?.color)
// console.log("year of car is : ", car?.year)

// tanda "?" artinya properties tersebut tidak wajib didefinisikan (optional)
let device: {type: string, name: string, processor?: string} = {
    type: "Handphone",
    name: "Xiaomi",
    processor: "Snapdragon"
}

// --- Menambahkan sebuah key di dalam Object
let user: {name: string, favoriteProgramming:string, experience: number, address?:string} = {
    name: "John Doe",
    favoriteProgramming: "Typescript",
    experience: 5
}

// console.log("before added address : ", user)
user["address"] = "Orchard Road, Singapore"
// console.log("after added address : ", user)

// --- Mengupdate value di dalam Object
let smartphone: {type: string, merk: string, processor: string, product:string} = {
    type: "Smartphone",
    merk: "Asus",
    processor: "Helio",
    product: "Taiwan"
}

// console.log("before edit product : ", smartphone)
smartphone["product"] = "Hong Kong"
// console.log("after edit product : ", smartphone)

// --- Menghapus value di dalam Object
let fruit: {color: string, name: string, price?: number} = {
    name: "Salak",
    color: "Brown",
    price: 15000
}

delete fruit?.price
// console.log("after deleted : ", fruit)

// --- Cek tipe data di dalam Object
let motorbike: {brand: string, name: string, year: number} = {
    brand: "Yamaha",
    name: "X-max",
    year: 2022
}

// console.log("check type of name : ", typeof motorbike?.name)
// console.log("check type of year : ", typeof motorbike.year)

// --- Nested Object
let person: {name: string, title?: string, address:{street: string, city: string, zip: number, language?: string}, hobbies?: Array<string> | any} = {
    name: "John Doe",
    title: "Programmer",
    address: {
        street: "Orchard Road, Singapore",
        city: "Singapore",
        zip: 18909
    },
    hobbies: [
        "Playing game",
        "Swimming",
        "Cooking"
    ]
}

// --- Mengakses Nested Object
// console.log("city of address is : ", person?.address?.city) // -> mengakses value object city
// console.log("one of hobbies is : ", person?.hobbies[1]) // -> mengakses hobbies "swimming"

// --- Menambahkan Nested Object
person.address["language"] = "EN"
person.hobbies?.push("Coding")
person.hobbies?.unshift("Playing basketball")

// console.log("after added object : ", person)

// --- Mengupdate Nested Object
person.address["zip"] = 123456
person.hobbies[4] = "Playing music"

// console.log("after updated object : ", person)

delete person?.hobbies
delete person?.title

// console.log("after deleted : ",person)

// --- CLONING OBJECT
let laptop: {merk: string, name: string, year: number} = {
    merk: "Apple", 
    name: "Macbook Pro",
    year: 2019                                                                                                      
}

let dupe1 = Object.assign({}, laptop) // -> copy menggunakan object assign
let dupe2 = {...laptop} // -> copy menggunakan spread operator
let dupe3 = JSON.parse(JSON.stringify(laptop)) // -> copy menggunakan JSON method (efektif untuk melakukan deep copy sekaligus merubah data menjadi string)

// console.log("dupe 1 : ", typeof dupe1)
// console.log("dupe 2 : ", typeof dupe2)
// console.log("dupe 3 : ", typeof dupe3)


// --- JSON DATA

const toples: Array<{}> = [
    {
        image: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/4/21/f97e4aca-7d89-4c52-a9bd-0bb5baf6e424.png.webp?ect=4g",
        name: "Hermetico Jar",
        price: 19899,
        location: "Jakarta Barat"
    },
    {
        image: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/5/31/cdd9243b-06af-46e5-a7d4-703c9fbbfe7c.jpg.webp?ect=4g",
        name: "Calista Rumoi",
        price: 57500,
        location: "Tangerang"
    },
    {
        image: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/7/9f5bf168-bdef-489d-a0be-af0d67125211.jpg.webp?ect=4g",
        name: "Aruma",
        price: 69000,
        location: "Tangerang Selatan"
    },
]

toples.map((item: any, index: number) => {
    console.log(item?.name)
    console.log(item?.location)
})