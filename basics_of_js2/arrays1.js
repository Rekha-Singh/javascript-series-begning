const gods=['Shivji','Narayanji','Kanhaji']
const godness=['Parvatiji','Shree ji','Radhaji']
gods.push(godness)// taking array as an input

// console.log(gods);

/* [
  'Shivji',
  'Narayanji',
  'Kanhaji',
  'Ramji',
  'Ganeshji',
  [ 'Parvatiji', 'Shree ji', 'Radhaji', 'Sitaji', 'Ridhi-Sidhi ji' ],
  'Parvatiji',
  'Shree ji',
  'Radhaji',
  'Sitaji',
  'Ridhi-Sidhi ji'
] */

// console.log(gods[5][3]); // sitaji
const newGod = gods.concat(godness)
// console.log(newGod); // create one single arrays
/*[
    'Shivji',
    'Narayanji',
    'Kanhaji',
    'Parvatiji',
    'Shree ji',
    'Radhaji'
  ] */

  const all_god=[...gods,...godness] // spread operator
//   console.log(all_god);

  const newA=[1,2,3,3,[4,4],5,[6,7[8,9]]]
  const newAA=newA.flat(Infinity)// convert one array
//   console.log(newAA);

// console.log(Array.isArray("Rekha"));

// string to array=from method
// console.log(Array.from("Rekha"));
// console.log(Array.from({name:'Maya'})); // it will give an empty array because its confuse what will be convert in array =key or value

let con1=100
let con2=200
let con3=300
// console.log(Array.of(con1,con2,con3));
console.log(Array.from(con1,con2,con3));// eror =from is use for string,objects
