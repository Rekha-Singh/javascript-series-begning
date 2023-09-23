const ARR=['JS','PY','CPP','JAVA','RB']

ARR.forEach( function (ITEMS){
    // console.log(ITEMS);
});

ARR.forEach( (val)=>{
    // console.log(val);

})

function printMe(item){
    // console.log(item);
}

// ARR.forEach( printMe)

ARR.forEach( (item,index,arA)=> {
    // console.log(item,index,arA)
})




const lang=[
    {
    langName:'JavaScript',
    langFileName:'js'
    },
    {
        langName:'Java',
        langFileName:'java'
    },
    {
        langName:'Python',
        langFileName:'py'
    }
]

lang.forEach((item) =>{
    console.log(item.langFileName);
})
