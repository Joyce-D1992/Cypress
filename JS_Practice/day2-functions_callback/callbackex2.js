// function greet(grt){
//     grt();
// }

// greet(sayHello)

function greet(grtHello,grtHi){
    grtHello();
    grtHi();
}

greet(sayHello,sayHi)

function sayHello(){
    console.log('Hello')
}

function sayHi(){
    console.log('Hii')
}