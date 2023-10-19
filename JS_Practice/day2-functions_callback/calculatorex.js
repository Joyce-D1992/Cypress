function calculate(num1,num2,mathOperation){
    return mathOperation(num1,num2)
}

let sum = calculate(3,5,add)
console.log('sum ::' +sum)
let diff = calculate(4,7,sub)
console.log('Diff :'+diff)


function add(num1,num2){
    return num1 + num2

}

function sub(num1,num2){
    return num1 - num2
}

// let sum = add(3,4)
// let diff = sub(2,6)

// console.log(sum)
// console.log(diff)