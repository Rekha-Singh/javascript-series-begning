const arr=[1,234,5,5,7,8,]
for(const i of arr){
    // console.log(i);
}

const greetings='Hello dear Rekha!'
for(const str of greetings){
    // console.log(str);
}

// Map=map is a type of obj in js it has key and values . Map not contains duplicates values

const map=new Map()
map.set('in','India')
map.set('usa','United State of America')
map.set('fr','France')

// console.log(map);

for(const [key,value] of map){
    // console.log(key,':-',value);
}

const myObj={
    'g1':'BollyBall',
    'g2':'Cricket',
    'g3':'Ludo'
}

for(const [ key,value] of myObj){
    console.log(key,':-',value);
}