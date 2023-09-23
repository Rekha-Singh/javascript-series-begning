const myObj={
    'js':'JavaScript',
    'py':'Python',
    'Sql':'MySql',
    'cpp':'C++'
}

for(const key in myObj){
    // console.log(key); // keys are printed

    // console.log(`${key} or value is = ${myObj[key]}`);
}

const arrProgramLang=['js','cpp','py','java','rb']

for(const key in arrProgramLang){
    // console.log(`${key} and value for it = ${arrProgramLang[key]}`);
}

const map=new Map()
map.set('in','India')
map.set('usa','United State of America')
map.set('fr','France')

// FOR IN LOOP NOT ITRATE IN MAP

for(const [key] in map){
    console.log(key);
}