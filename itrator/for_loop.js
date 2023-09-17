for(let i=1;i<=5;i++){
    // console.log(i);
    for (let j = 1; j <=10; j++) {
        if (i===3) {
            // console.log(`${i} * ${j} is =`, i*j);
            
        }
    }
   
}


// arrays

let myArr=['rekha','sonam','rani','rahul','subhi']
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);

    // or 
    // console.log(myArr[i]);
    
}

// for(let i=0;i<=20;i++){
//     if (i===10) {
//         console.log('10 is detected');
//         break // come out of the loop
//     }
//     console.log(`value from 1 to 20 is =  ${i}`);
// }
for(let i=0;i<=20;i++){
    if (i===10) {
        console.log('10 is detected');
        continue // condtion is skip 
    }
    console.log(`value from 1 to 20 is =  ${i}`);
}