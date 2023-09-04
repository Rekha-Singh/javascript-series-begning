let datenow=new Date()
// console.log(datenow);//2023-09-04T17:41:55.863Z
// console.log(datenow.toString());// Mon Sep 04 2023 17:42:22 GMT+0000 (Coordinated Universal Time)
// console.log(datenow.toLocaleString()); //9/4/2023, 5:43:28 PM

// console.log(typeof datenow)// object

let myDate=new Date(2023,8,4)
// console.log(myDate.toLocaleDateString()) // 9/4/2023= month start from 0 in js

// console.log(datenow.getDay().toString())
console.log(datenow.getMonth()+1)
