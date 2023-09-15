const arr=[2,2,3,4,5,6,4,3,5,6,];
let newArr=[...new Set(arr)]
// console.log(newArr);

let newA=[];
let len=arr.length
for(let i=0;i<len;i++){
    if(newA.indexOf(arr[i])===-1){
        newA.push(arr[i])
    }
}
// console.log(newA);



let a=[5,3,5,2,1,7,2]
let b=[];
let lenn=a.length
a.sort();
let temp;
for(let i=0;i<lenn;i++){
    if(a[i]!==temp){
        b.push(a[i])
        temp=a[i]
    }
}
console.log(b);