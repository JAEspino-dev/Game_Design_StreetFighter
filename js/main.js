//Create a street fighter character class that makes fighting game characters with 4 properties and 3 methods


class StreetFighter {
    constructor(name, build, weapon) {
        this.name = name
        this.build = build
        this.weapon = weapon
        this.moveSpeed = 1
        this.strength = 1
    }
    attack() {
        console.log('Dealt some damage')
    }
    defend = () => {
        console.log('Damage blocked')
    }
    describe = () => {
        console.log(`This character's strength is ${this.strength} and has a move speed of ${this.moveSpeed}`)
    }
}
let spike = new StreetFighter('Spike', 'Dog-Goblin', 'Spike-tail')
console.log(spike)
console.log(spike.describe())

const typesOfCuisines = ['Thai', 'Chinese', 'Mexican', 'American', 'Indian']
const filteredTypesOfCuisines = typesOfCuisines.filter(function (cuisine) {
    if (cuisine === 'Thai' || cuisine === 'Mexican') {
        return true // keep it, and put it into the new array
    }
})
console.log(filteredTypesOfCuisines)

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

const [a,, c, ...rest]= alphabet

console.log(a)
console.log(c)
console.log(rest)

function sumAndMultiply(a,b){
    return [a+b, a*b]
}

const [sum, multiply, division = 'No division'] = sumAndMultiply(2,3)

console.log(sum)
console.log(multiply)
console.log(division)

const personOne = {
    name: 'Newt',
    age: 100,
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}
const { name:firstName, age, favoriteFood = 'Rice'} = personTwo

console.log(firstName)
console.log(age)
console.log(favoriteFood)

let person = {
    name: "Brad",
    age: 35
}
person = JSON.stringify(person)
person = JSON.parse(person)