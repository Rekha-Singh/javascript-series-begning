// singleton
// Object.create
//  Objects literals 
// take a sysmbol and take it in a object like a key and print it
const mysymbol=Symbol('*&&^^^%545')
const user={name:'rekha',
'full_name':'Maya SIngh',
age:23, gmail:'65464@gmail',loc:'Bhopal',islogedin:false,
[mysymbol]:'mykey1',
last_login_day:['monday','sunday']

}
// both methods can use for acess objects

// console.log(user.name);
// console.log(user['name']);
// console.log( user[mysymbol]); 

// change values in objects
user.loc='Banglore'
// console.log(user);

// we can freeze the obs also
// Object.freeze(user),
user.full_name='Sanjana Singh'
// console.log(user);

user.greeting=function(){
    // console.log("Hello dear users");
}
// console.log(user.greeting); // undefined
console.log(user.greeting());
user.greetingTo=function(){
    console.log(`Hello dear, ${this.name}`);
}
console.log(user.greetingTo());