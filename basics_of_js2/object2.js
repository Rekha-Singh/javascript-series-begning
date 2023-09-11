// both method to declare objects in js
const instagram=new Object() // singleton objects only
const facebookApp={}
// add items in objects

facebookApp.id='5@'
facebookApp.name='Rekha',
facebookApp.gmail='54656@.com'
facebookApp.no=9009
console.log(facebookApp);

const regular_user={
    gmail:'1234@com.in',
    full_name:{
        user_full_name:{
            first_name:'Rekha',
            last_name:'Singh'
        }
    }
}
// console.log(regular_user.full_name.user_full_name);

// combine of two objects
 
const ob1={1:'a',2:'b'}
const ob2={3:'rekha',4:6}
// const ob3={ob1,ob2} // objects inside object will come in o/p
const ob3=Object.assign(ob1,ob2) //{ '1': 'a', '2': 'b', '3': 'rekha', '4': 6 }
// or=o/p will same

const ob4=Object.assign({}, ob1,ob2) // { '1': 'a', '2': 'b', '3': 'rekha', '4': 6 }

// or
const ob5={...ob1,...ob2}

// console.log(ob3);
// console.log(ob4);
// console.log(ob5);

// objects inside arrays

const database=[{
    id:1,
    name:'rekha'
},
{
    gmail:'1223@.in',
    num:8989
},
{
    clor:'pink',
    hero:'SSR'
}]
// console.log(database[2].clor);

// console.log(Object.keys(facebookApp));// accessing keys from objects=return type is arrays
// console.log(Object.values(facebookApp));
// console.log(Object.entries(facebookApp))
console.log(facebookApp.hasOwnProperty('gmail'));