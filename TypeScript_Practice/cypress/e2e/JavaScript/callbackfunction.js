function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function calculate(x,y,func){
    return func(x,y)
}

let cal_sum_value = calculate(3,4,add)
console.log('data when called sum function as argument is : '+cal_sum_value)

let cal_sub_value = calculate(10,5,sub)
console.log('data when called sum function as argument is : '+cal_sub_value)

