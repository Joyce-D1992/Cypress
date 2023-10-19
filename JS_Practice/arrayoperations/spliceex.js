let numbers = [6,7,8,9,0,7,5,4,3,3]

// let PartOfNumbers=numbers.splice(4,3)
// console.log(PartOfNumbers)
// console.log(numbers)
//[0,7,5]
//[6,7,8,9,4,3,3]

numbers.splice(2,2)
console.log(numbers)
numbers.splice(2,2,10,11)
console.log(numbers)
//[6,7,0,7,5,4,3,3]