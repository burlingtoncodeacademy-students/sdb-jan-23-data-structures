// ? Array Methods

/* 
    * Methods are fuctions that live inside of an object prototype
    * Denoted by the . at the end of an object we're working on
    * Ex: someVariable.toLowerCase()
*/

let educationTeam = [
    ["Paul Niemczyk", "Rob VanArsdall", "Eric Winebrenner"],
    ["Ben Villa", "Dave Landey", "Ben Ragland"],
    ["Lulu Browne", "Julie Assur"]
]

/* 
    .push()

    * adds an element to the end of an array
    * returns new length of an array
*/

console.log(educationTeam)
let pushReturn = educationTeam.push(["Benny Boas", "Kate Sweeney"])
console.log("Value", educationTeam, "Return of .push()", pushReturn)

/* 
    .pop()

    * removes last array element & returns it
*/

let lastElement = educationTeam.pop()
console.log("Value", educationTeam, "Return of .pop()", lastElement)

/* 
    .unshift()

    * adds an element to the beginning of an array
    * returns the length of the new array
*/

let unshiftReturn = educationTeam.unshift("Michael Morris")
console.log("Value", educationTeam, "Return of .unshift()", unshiftReturn)


/* 
    .shift()

    * removes the first element from an array
    * returns the length of the new array
*/

let shiftReturn = educationTeam.shift()
console.log("Value", educationTeam, "Return of .shift()", shiftReturn)

// ? Advanced Array Methods

// Arrays are iterable

let states = [
    "Illinois",
    "Wisconsin",
    "Alabama",
    "New York",
    "Vermont",
    "Indiana", 
    "Massachussets",
    "Ohio",
    "Virginia",
    "West Virginia",
    "Pennsylvania",
    "North Dakota",
    "South Dakota",
    "Oregon",
    "California",
    "Nevada",
    "Arizona",
    "New Mexico",
    "Florida",
    "Louisiana",
    "Texas",
    "New Hampshire",
    "Maine",
    "Rhode Island",
    "Alaska",
    "Connecticut",
    "Montana",
    "Nebraska",
    "Delaware",
    "Washington",
    "Iowa",
    "Kansas",
    "Oklahoma",
    "Michigan",
    "Minnesotta",
    "Kentucky",
    "Tennessee",
    "Idaho",
    "Utah",
    "Georgia",
    "Mississippi",
    "Missouri",
    "Colorado",
    "Delaware",
    "Hawaii",
    "Maryland",
    "North Carolina",
    "South Carolina",
    "New Jersey",
    "Wyoming"
]

console.log(states.length)

for (state of states) {
    console.log(state)
}

/* 
    .forEach()

    * fires a callback fx on each element of your array
    * callback has three parameters
        * value - the iterable
        * index - of the iterable
        * array - the entire array .forEach was called upon
*/

states.forEach((state, index, array) => {
    console.log(`${state} ${index}`)
})

/* 
    Challenge

    * Utilize forEach on our states array to create a new array
    * That new array will be populated with the states who start with letter A
    * 
    * create a new array outside of the forEach that's empty
    * have a forEach on original array
    * check if the iterable at the index of [0] matches letter A
    * if it is, push the value to the new array
    ! SPICEY MODE 
*/
let newArr = []
states.forEach(state => {
    state[0] == "A" ? newArr.push(state) : null
    // Without .push() method
    // state[0] == "A" ? newArr[newArr.length] = state : null
})
console.log(newArr)


function copyOfLength(value) {
    let count = 0
    for (i of value) {
        count++
    }
    return count
}

console.log(copyOfLength(states))
console.log(states.length)

/* 
    .map()

    * creates an array with elements resulting from the callback fx
*/

let statesLowerCase = states.map(state => state.toLowerCase())
console.log(statesLowerCase)

/* 
    .filter()

    * Creates a new array based on a filter function
    * only the filtered items can be added to an array
    * cannot have (if/else) where else also gets added
*/

let statesC = states.filter(state => state.startsWith("C"))
console.log(statesC)

let grades = [56, 78, 96, 41, 7, 22, 15, 10, 89]

/* 
    ? Challenge

    * Utilize array methods to raise the grade by 15 points for everyone
    * Those above 90 should not get any points

*/

// Uses new array for new grades
let updatedGrades = grades.map(grade => grade < 90 ? grade + 15 : grade)
console.log(updatedGrades)

// Rewrites the values of original array to new grades
grades.forEach((_, index, originalArr) => {
    //          _ - placeholder if we don't use the param
    // originalArr[index] == grade
    //             grade  == iterator representation of grade
    //             think of counting on your fingers ^^^
    console.log("This is the", originalArr[index])
    if (originalArr[index] > 90) {
        null
    } else {
        originalArr[index] = originalArr[index] + 15
    }
})
console.log(grades)