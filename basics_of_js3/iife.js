// imediate involked function expression=global scope se palute hone rokne k liye imidiate call call krne bale function ko iife kahte he
// normal function
// function dbConn(){
//     console.log('DB CONNECTED');
// }
// dbConn()

// syntax=()()=iife
(function dbConn(){ // name iife
    console.log('DB CONNECED');
})(); // ; is imp because operation in running not not other function

((name)=>{ // taking parameter/ without named iife
    
    console.log(`YOUR DB IS CONNECT MISS ${name}`);
})('Rekha');
