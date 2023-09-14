// this key word is refered  current contaxt

user={
    user_name:'Maya',
    price:999,
    sent_messege:function () {
        console.log(`${this.user_name}, welcome to my channel`);
        console.log(this);
    }
}
// user.sent_messege()
// user.user_name='Sunny'
// user.sent_messege()

// function chai(){
//    let  username='Rekha Singh'
//     console.log(this.usename);// undefined =it means we cant use this with function in js
// }
// chai()

const coffe=function (){
    let usename='sonam'
    console.log(this.usename); // undefined
}
// coffe()

const tea=()=>{
    let user='Rahul'
    console.log(this.user); // undefined
}
// tea()

const sum=(num1,num2)=>{
    return num1+num2

}

// console.log(sum(40,50));

// or second way to write arraow function called implicitly

const juice=(n1,n2)=> n1+n2
// console.log(juice(49,10)); 

// or

const juicy=(n,n1)=> (n,n1)
// console.log(juicy(70,8))

const addTwo=(n1,n2)=> ({useer:'rekha'})
console.log(addTwo(80,80))