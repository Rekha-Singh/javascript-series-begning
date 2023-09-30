const clock = document.getElementById('clock');
 console.log(clock);
// const clocks=document.querySelector('#clock');
// console.log(clocks);

let date = new Date();
console.log(date.toLocaleDateString());

setInterval( function(){
    let date = new Date();
// console.log(date.toLocaleDateString());

clock.innerHTML=date.toLocaleTimeString();

},1000)
