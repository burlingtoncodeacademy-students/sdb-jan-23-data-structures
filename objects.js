// ? Objects

/* 
    A container for values in JavaScript Object Notation format (JSON)
    * exists as a string
    * denoted by { }
    * not indexable
    * has properties and methods
        * .property (ex .length)
        * .method() (ex. toUpperCase())
    * has .this keyword
*/

// Object Literal Creation

let bentley = {
    // property: value,
    // key: value pairs
    species: "dog",
    color: "cow",
    spayedNeutered: true,
    breed: "olde english bulldogee",
    weight: 78,
    favoriteActivity: ["farting", "fetching", "sleeping"]
}

// Returns data type of object and our object literal
console.log(typeof bentley, bentley)

// Pretty display in a table
console.table(bentley)

// Returns undefined because objects are NOT indexable
console.log(bentley[0])

// ? Accessing properties and values

// done using dot notation
console.log(bentley.species)

// done using keys
console.log(bentley["weight"])

// ? Viewing object keys and values

console.log(Object.keys(bentley))
console.log(Object.values(bentley))
// they return arrays so can be used with array methods

/* 
    ? Challenge

    * How would you iterate over Bentley's favorite activity using forEach?
*/

bentley.favoriteActivity.forEach(activity => console.log(activity))

// ? Adding properties and values

let car = {
    make: "BMW",
    model: "M5",
    mileage: 27344,
}

car.chassis = "F10"
car["transmission"] = "DCT"
console.log(car)

// ? Modifying properties and values

car.mileage = 34100
console.log(car)

// 1. reassign property
car["make"] = car["carMake"]
// 2. assign new value to new property
car.carMake = "BMW"
// 3. delete old property
delete car.make

console.log(car)

/* 
    * Makeshift example of a database and an income object.
    * Matching passwords between db and incoming object.
*/

let incoming = {
    username: "mrpndev",
    password: "dbLocal"
}

let db = [
    { username: "mrpndev", password: "dbLocal" },
    { username: "kardashianFan123", password: "password123" },
    { username: "watermalon3", password: "iLikeTuhtles123" },
]


let loginForLoop = () => {
    // 1. Find the user by looping over our db, and if found, store in a variable
    let foundUser
    for (i of db) {
        i.username == incoming.username ? foundUser = i : null
    }
    console.log(foundUser)
    
    // 2. is foundUser true or false?
    if (!foundUser) {
        console.log("User not found")
    } else {
        // 3. if userFound, compare passwords
        foundUser.password == incoming.password ? console.log("User logged in") : console.log("Incorrect password")
    }
}

// Solution using filter

let login = () => {
    let foundUser = db.filter(u => u.username == incoming.username)
    console.log(foundUser)
    if (foundUser.length == 0) {
        console.log("User not found")
    } else {
        foundUser[0].password == incoming.password ? console.log("User logged in") : console.log("Incorrect password")
    }
}

login()

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Flying"},
                { episode: 3, episodeName: "Tahani Al-Jamil"},
                { episode: 4, episodeName: "Jason Mendoza"},
                { episode: 5, episodeName: "Category 55 Emergency"},
            ]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [
                { episode: 1, episodeName: "Everything is Great"},
                { episode: 2, episodeName: "Dance Dance Resolution"},
                { episode: 3, episodeName: "Team Cockroach"},
                { episode: 4, episodeName: "Existential Crisis"},
                { episode: 5, episodeName: "The Trolley Problem"},
            ]
        }
    },
    isAvailable: true
}

console.log(netflix.seasonInfo.season1.episodeInfo[1].episodeName)

/* 
    * add a season3
    * season 3 will be an object with properties of numberOfEpisodes and episodeInfo
    * episodeINfo will be an array of 2 objects
    * the two objects will have properties of episode and episodeName
    * fabricate their values
*/

netflix.seasonInfo.season3 = {
    numberOfEpisodes: 2,
    episodeInfo: [
        {episode: 1, episodeName: "Potato"},
        {episode: 2, episodeName: "Funny games"}
    ]
}

console.log(netflix.seasonInfo)

// ? Assign a property called totalSeasons to the netflix object with a value of what total seasons are.

netflix.seasonInfo.totalSeasons = Object.keys(netflix.seasonInfo).length
console.log(netflix.seasonInfo)

