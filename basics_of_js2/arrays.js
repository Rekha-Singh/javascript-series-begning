// const myInfo=['rekha','mayasingh','sonam']
// console.log(myInfo.concat('soanm'));


const myarr=[1,2,3,4,5,6,7]
// console.log(myarr[0]);
myarr.push('Rama')// add element at the end
// console.log(myarr);

myarr.pop()// remove at the end
// console.log(myarr);

myarr.unshift('shree') // add element from begin and shift each element by 1
// console.log(myarr);

myarr.shift() // remove element from begin
// console.log(myarr);

// console.log(myarr.includes(9)); //to check element is exist or not

// console. log(myarr.indexOf(6));// to check index of elements

const newArr=myarr.join() // change array into string
// console.log(myarr);
// console.log(newArr);

const mynewa1=myarr.slice(1,3)
console.log(mynewa1); // its not affect the original arrays and exclude the range
console.log(myarr); // its iclude the range and affect the orginal array



