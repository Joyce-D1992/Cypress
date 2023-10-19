function func1(arg1){

    setTimeout(arg1,3000)
    console.log("Inside function 1")
}

function func2(){
    console.log("Inside function 2")
}

// func1()
// func2()

// setTimeout(func1,5000)
// func2()

func1(func2)