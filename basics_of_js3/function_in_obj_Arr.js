function calculateF(...num){// inside function ... is called rest oparator=which gives you all values in arrays format
    return num
}
// console.log(calculateF(20,40,40,90,9));// [ 20, 40, 40, 90, 9 ]

function calsi(v1,v2,...num){
    return num
}
// console.log(calsi(20,30,40,60,709));// [ 40, 60, 709 ]=v1 take 20,v2 take 30 and rest value taken by rest operatpr

// object in function

const user={
    userName:'rekha',
    moNum:9009
}
function objectHandle(anyObj){
    console.log(`user name is ${anyObj.userName} and mobile numbe is ${anyObj.moNum}`);
}
// objectHandle(user)
// or =the ways of calling function
objectHandle({
    userName:'maya',
    moNum:8989
})

const arr=[8,60,70,70]
function returnSecondValue(getArr){
    return getArr[1]

}
console.log(returnSecondValue(arr));