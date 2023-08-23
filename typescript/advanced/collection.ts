// ---- ARRAY ----

let random: number[] = [11, 20, 7, 2, 5] // --> untuk data bertipe array number
let randomstr: (string | number)[] = [11, 20, "tujuh", "sembilan"] // --> untuk data campuran number dan string
let generic: Array<number> = [11, 20, 7, 2, 5] // --> untuk data bertipe array number menggunakan generic symbol
let genericStr: Array<number | string> = [11, 20, "tujuh", "sembilan"] // --> untuk data campuran number dan string menggunakan generic symbol

// ---- TUPLE ----
// -- element di dalam tuple bisa disesuaikan tipe datanya

let combinate: [string, boolean]
combinate = ["Hello", true]

// ---- OBJECT as CLASS ----

class Banana {
    color = "yellow"
    type = "tropical fruit"
}

let banana: Banana = new Banana() // substitutes
let banana_2: Banana = new Banana() // menghasilkan object lain yang berbeda tapi induknya sama

// console.log("color of banana : ", banana.color)
// console.log("type of banana : ", banana.type)

class Crocodile {
    color = "green"
    type = "predator"
}

let crocodile: Crocodile = new Crocodile()

// console.log("the color of crocodile is : ", crocodile.color)
// console.log("the type of crocodile is : ", crocodile.type)

// ---- OBJECT as TYPE or Interface
// type -> untuk menangani tipe data dan function
// interface -> untuk menangani object

type Address = {
    street: string,
    state: string,
    zip: number
}

interface Person {
    name: string,
    age: number,
    job: string,
    isMarried: boolean,
    address: Address,
    hobbies: Array<string>
}

const person_1 : Person = {
    name: "John Doe",
    age: 27,
    job: "Programmer",
    isMarried: true,
    address: {
        street: "Orchard Road",
        state: "Singapore",
        zip: 18909
    },
    hobbies: [
        "Fishing",
        "Playing a game",
        "Singing"
    ]
}

const person_2 : Person = {
    name: "Mr. X",
    age: 32,
    job: "Backend Engineer",
    isMarried: false,
    address: {
        street: "Jl. Pegangsaan Timur, Jakarta",
        state: "Indonesia",
        zip: 2345
    },
    hobbies: [
        "Gardening",
        "Reading a book"
    ]
}

// console.log("candidate 1 is : ", person_1)
// console.log("candidate 2 is : ", person_2)

type Hobbies = {
    hobbies: Array<string>
}

interface People extends Hobbies {
    name: string,
    age: number,
}

// -- interface bisa melakukan extends terhadap type atau interface lainnya
// -- untuk mempersingkat dalam pendefinisian tipe data

const people_1: Array<People> = [
    // -- untuk menjadikan interface People bertipe data array, kemudian didefinisikan ke people_1
    {
        name: "John Doe",
        age: 27,
        hobbies: ["Fishing", "Programming", "Gaming"]
    },
    {
        name: "Mr. X",
        age: 32,
        hobbies: ["Gardening", "Learning", "Gaming"]
    },
]

function collectPeople(people: Array<People>){
    // -- function memiliki parameter people dengan tipe data Array<People>
    let result = people.map((people: People, index: number) => {
        console.log(people?.name)
        console.log(people?.age)
        console.log(index)
    })
    return result
}

collectPeople(people_1)