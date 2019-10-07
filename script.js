const inventors = [
  'Albert Einstein',
  'Issac Newton',
  'Galileo Galilei',
  'Marie Curie',
  'Johannes Kepler',
  'Nicolaus Copernicus',
  'Max Planck',
  'Katherine Blodgett',
  'Ada Lovelace',
  'Sarah E. Goode',
  'Lise Meitner',
  'Hanna Hammarstrom'
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//Print out an array of the inventors whose name starts with 'A'.
const includeAFirstNames =  inventors.filter(name => name.split('')[0] === 'A')

console.log('All the names that contain letter A at the start: ', includeAFirstNames)

//Print out an array of the inventors whose name contains 'n'.
const containANames =  inventors.filter(name => name.split('').includes('n' || 'N'))

console.log('All the names that contain letter n: ', containANames)

// Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
const hasSameLetterTwiceInARowNames = inventors.filter(name => (name.split('').filter((char, i) => char === name.split('')[i+1]).length > 0))

console.log('All the names that contain the same letter next to each other: ', hasSameLetterTwiceInARowNames)

// Print out an array of the numbers which are odd.
const oddNumbers = numbers.filter(number => number % 2 == 1)

console.log('Array of the numbers which are odd: ', oddNumbers)

// Print out an array of the numbers that have two digits.
const twoDigitNumbers = numbers.filter(num => num > 9)

console.log(twoDigitNumbers)

// Print out an array of the numbers which are prime.
const primeNumbers = numbers.filter(num => { 
  // Number.isInterger(Math.sqrt(num*2));
  
  for (let i = 2; i < num; i++ ) {
    if(num % i === 0) return false;
  }
  return num > 1;
})

console.log(primeNumbers);

// Print out the first name of each inventor.
const firstNames = inventors.map(name => name.split(' ')[0])

console.log(firstNames)

//Print out the length of every inventor's full name.
const lengthOfNames = inventors.map(name => name.length)

console.log(lengthOfNames)

// Print out all the inventors' names in uppercase.
const uppercaseNames = inventors.map(name => name.toUpperCase())

console.log(uppercaseNames)

//Print out initials of all inventors(e.g. A.E., I.N., ...)
const initials = inventors.map(name => name.split(' ').map(n => n[0]).join('.'))

console.log(initials)

//Print out an array of every number multiplied by 100.
let mul = numbers.map(n => n*100)
console.log(mul)

//Print out an array of the powers of two as shown by this array
let powerResult = numbers.map(n => n**2)

console.log(powerResult)

//Sort all the inventors in alphabetical order, A-Z.
let sortedNames = inventors.sort()
console.log(sortedNames)

//Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
let reverselySortedNames = inventors.sort((a,b) => a[0] > b[0] ? -1 : 1)
console.log(sortedNames)

//Sort all the inventors by length of name, shortest name first.
let sortedByLengthNames = inventors.sort((a,b) => a.length - b.length)
console.log(sortedByLengthNames)

//Sort all the inventors by length of name, longest name first. Do not use the reverse method.
let reverselySortedByLengthNames = inventors.sort((a,b) => b.length - a.length)
console.log(reverselySortedByLengthNames)

//Find the sum of all the numbers.
let sum = numbers.reduce((a,c) => a + c)
console.log(sum)

//Find the sum of all the even numbers.
let sumOfEvens = numbers.reduce((a,c) => c % 2 == 0 ? a+c : a, 0)
console.log(sumOfEvens)

//Create a string that has the first name of every inventor.
let firstNameString = inventors.reduce((a, c) => a + c.split(" ")[0],"")
console.log(firstNameString)

// Does any inventor have the letter 'y' in their name?
let containYNames = inventors.some(name => name.includes('y' || 'Y'))
console.log(containYNames)

//Does every inventor have the letter 'e' in their name?
let containingELetterNames = inventors.every(name => name.includes('e'))
console.log(containingELetterNames)

//Does every inventor have first name that's longer than 4 characters?
let moreThan4CharacterNames = inventors.every(name => name.split(" ")[0].length > 4)
console.log(moreThan4CharacterNames)

// Find the inventor that has a middle name.
let middleNameList = inventors.find(name => name.split(" ").length > 2)
console.log(middleNameList)

//Bonus: Return a new array without inventor with a middle name.
let noMiddleNameInventors = inventors.filter(name => name !== inventors.find(n => n.split(" ").length > 2))
console.log(noMiddleNameInventors)
