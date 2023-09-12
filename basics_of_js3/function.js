function myName(){
    console.log('Rekha');
    console.log(70+90);
}
// myName= function reference
// myName() // function call or execution of function

function addNum(num1,num2){ // parameters
    console.log(num1+num2);
}
// const result=addNum(8,5)// arguments=13
// console.log(result); // undefined

function multiple(num1,num2){
    let result=num1*num2
    console.log('hello ji');
    return result // aftr return nothing will print
    // console.log('hello ji');
}
// const result=multiple(9,3)
// console.log("result is ",result);


function sendMessege(user){
    if (user===undefined) { //(!user)
        console.log('please enter your name');
        return
    }
    return `${user} just logged in`
}
// console.log(sendMessege('Rekha'))
console.log(sendMessege()); // undefined

