//string declartion method one
const name="maya"
// console.log(name+"Singh");
const num=9009
// console.log(`My name is ${name} and my namber is ${num}`);


//string declartion method 2

const getBuilding_name= new String('Ma Durga Bhavan')
// console.log(getBuilding_name);
// console.log(getBuilding_name[6]);
// console.log(getBuilding_name.__proto__);//{}=object


/*
==============Extracting String Parts==========

slice(start, end)
substring(start, end)
substr(start, length)
*/

//console.log(getBuilding_name.length);// 15
// console.log(getBuilding_name.slice(3,7)); // Durg
// console.log(getBuilding_name.substring(1,7)); // a Durg
//console.log(getBuilding_name.substr(4,6)); //urga B

//=====Replacing String Content============
//replace()
// replaceAll()

//console.log(getBuilding_name.replace('Ma','JagJanani')); // JagJanani Durga Bhavan
//console.log(getBuilding_name.replaceAll('Ma','Maiya'));// Maiya Durga Bhavan

//============uppecase===========
// console.log(getBuilding_name.toUpperCase());

// ============lowecase======
// console.log(getBuilding_name.toLowerCase());

/* trim methods

String trim()=white spaces remove from both side
String trimStart()
String trimEnd()

*/

let useI="            miss rekha  singh              "

// console.log(useI.trim());
// console.log(useI.trimStart());
// console.log(useI.trimEnd())

// include method

// console.log(useI.includes('maya'))// false


/*==============split method ===========
this method create an array

split(separator)
split(separator, limit)
*/
const Dream="My@dream@is to become@Sbarbie for a day"
console.log(Dream.split('-'));






