function simpleFunction(){

    console.log("Inside Function");

}

simpleFunction();

function add(a,b){

    var sum = a + b;
    console.log(sum);
}

add(10,10);


function add1(a,b){

    return(a+b);
}

console.log(add1(10,20));

function course(){

    this.course = "Protractor";
    this.duration = "20 hours";
}

var obj_course = new course();
console.log(obj_course.course+"----"+obj_course.duration);

function student(name,rollNo){

    this.name = name;
    this.rollNo = rollNo;
}

var obj_student = new student("Joyce", 101);
console.log("Student name is: "+obj_student.name+" and rollno is: "+obj_student.rollNo);