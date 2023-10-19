
//with callback function
// let numbers = [1,2,3,4,5,6,7,8,9,10]

// let evenNumbers = numbers.filter(getEvenNumbers)

// function getEvenNumbers(element){
//     return element %2==0
// }

// console.log(evenNumbers)


//without callback function
let numbers = [1,2,3,4,5,6,7,8,9,10]

let evenNumbers = numbers.filter(element => element %2==0)

console.log(evenNumbers)