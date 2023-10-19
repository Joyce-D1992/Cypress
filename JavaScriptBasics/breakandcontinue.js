// for(var i=1; i<=10; i++){

//     if(i==5){

//         break;
//     }

//     console.log(i);
// }

// for(var i=1; i<=10; i++){

//     if(i==5){

//         continue;
//     }

//     console.log(i);
// }

// for(var i=1; i<=3; i++){

//     for(var j=1; j<=3; j++){

//         console.log("i---> "+i+" j--->"+j);
//     }
// }

// for(var i=1; i<=3; i++){

//     for(var j=1; j<=3; j++){

//         if(j==2){

//             continue;
//         }

//         console.log("i---> "+i+" j--->"+j);
//     }
// }

// for(var i=1; i<=3; i++){

//     for(var j=1; j<=3; j++){

//         if(j==2){

//             break;
//         }

//         console.log("i---> "+i+" j--->"+j);
//     }
// }

//javascript labels
loop1:for(var i=1; i<=3; i++){

    loop2:for(var j=1; j<=3; j++){

        if(j==2){

            break loop1;
        }

        console.log("i---> "+i+" j--->"+j);
    }
}
