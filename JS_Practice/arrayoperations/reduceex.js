let numbers = [1,2,3,4,5,6,7,8,9,10,6,8,9,0,12,8]

let maxNumber = numbers.reduce(getMax)

function getMax(precendingElement,currentElement){
    if(precendingElement > currentElement){
        return precendingElement
    }
    else{
        return currentElement
    }
}

console.log("maxNumber:" +maxNumber)