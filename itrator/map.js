const myNum=[1,2,3,4,5,6,7,8,9,10]

const NewA=myNum.map( (num)=> {
    return num+5})
// console.log(NewA);


// chaining 
const newAA=myNum.map( (num)=> num*10).map( (num)=> num+1).filter( (num)=> num>40)
console.log(newAA);