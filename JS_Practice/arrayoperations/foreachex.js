let numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach(printElements)

function printElements(element,index,arr){
    //console.log('numbers::' +element)

    console.log("["+index+"]--->" +element)
}