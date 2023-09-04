// there are two types of memory =stack and heap
// stack =its provides memory for all primitive data types and create the copies of objects
// heap= non primitive datatypes and create reference for the objects

// stack
let myName="rekha"
let altName=myName
altName="mayaSingh"
console.log(altName);

// for heap
 const user={
    gmail:"6456345rekha@gmail.com",
    pin:462001
 }
 const anotherUser=user

 console.log(anotherUser);
 console.log(user.pin);
 console.log(anotherUser.pin);