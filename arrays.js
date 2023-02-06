// ? Arrays

/* 
    ? Array is a list-like object
    ? Prototype has methods to perform traversal and mutation operations
        * denoted by [ ]
        * hold multiple data types
        * content can be accessed by their index
*/

let arr = []

console.log(arr) // creates empty array literal
console.log(Boolean(arr)) // ! empty arrays return true

// ? How would you check that an array is empty?????

!arr ? console.log("Empty") : console.log("Has contents")
// !WRONG returns "has contents" because array ALWAYS returns true

arr.length === 0 ? console.log("Empty") : console.log("Has contents")

if (arr.length == 0) {
    console.log("Empty")
} else {
    console.log("Has contents")
}

let carMake = ["BMW", "Porsche", "Maserati", "Pagani"]
console.log(carMake) // displays all contents of an array
console.log(carMake[1]) // displays value at an index
console.log(carMake[7]) // if !found returns undefined, NOT a ReferenceError

// ? Nesting, Assignment, & Reassignment

// Assign
carMake[4] = "Ferrari"
console.log(carMake)

carMake[carMake.length] = "Aston Martin"
console.log(carMake)

// Assign index values to a different variable
let bmw = carMake[0]
console.log(bmw)

// Reassigning Values
carMake[2] = "Yugo"
console.log(carMake)

// Nesting
carMake[carMake.length] = ["Toyota", "Honda", "Kia"]
console.log(carMake)

// ? How to access a nested array?
console.log(carMake[6])
// ? How do I access Honda then?
console.log(carMake[6][1])

// Arrays can have many different data types

let manyDataTypes = [
    "string",
    [1, 5, 6, true],
    false,
    undefined,
    null,
    NaN,
    "some other string"
]

console.log(manyDataTypes)

// Data Type
console.log(typeof manyDataTypes) // returns object due to JS' OOP nature

// Checking if data type is an array
console.log(manyDataTypes instanceof Array)

/* 
    ? Challenge

    * Create a variable named janCohort
    * Include everyone's name as array iterables
    * Nest an array with instructor's name, TA's name, and Matt Nolan
    * Access Rishi's name and reassign to Jennifer
    * Access Paul's name and reassign to Pablo
    ! SPICEY MODE: remove the last entry within the nested array
*/

let janCohort = ["Alex Perry", "Tyler Malone", "Jose Rodriguez", "Ian MacKenzie", "Michael Morris", "Rishi Baker"]
janCohort[janCohort.length] = ["Paul Niemczyk", "Dave Landey", "Matt Nolan"]

console.log(janCohort)

janCohort[5] = "Jennifer"

janCohort[6][0] = "Pablo"
console.log(janCohort)

janCohort[6][janCohort[6].length - 1] = null

console.log(janCohort)

let superNested = [1, [2, [3, [4, [5, "some value", "jackpot!"]]]]]
// get to the jackpot

console.log(superNested[1][1][1][1][2])


