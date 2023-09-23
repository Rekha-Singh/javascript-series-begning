const heros=['aryan','ramcharan','nithin']

const values=heros.forEach( (item)=>{
    // console.log(item);
})
// console.log(values);


// filter function=its also a callback function 

const myNum=[1,2,3,3,4,4,5,6,7,8,9,10]

const newNum=myNum.filter( (num)=>  {
return num>4
})
// console.log(newNum);

// for each for filtering

const newarr=[]
myNum.forEach( (items)=>{
    if (items>4) {
        newarr.push(items)
    }
})
// console.log(newarr);


const Books=[
    {
        title:'oneB',genre:'fiction',publition:1998,edition:2002
    },
    {
        title:'TwoB',genre:'non-fiction',publition:1992,edition:2007
    },
    {
        title:'ThreeB',genre:'History',publition:1998,edition:2006
    },
    {
        title:'FourB',genre:'non-fiction',publition:1989,edition:2008
    },
    {
        title:'FiveB',genre:'Science',publition:2009,edition:2010
    },
    {
        title:'SixB',genre:'fiction',publition:1987,edition:2008
    },
    {
        title:'SevenB',genre:'fiction',publition:1986,edition:2012
    }
]

// Accessing by filter method

const newDataOf_books=Books.filter( (book)=>{
    // return book.edition>2004

    return book.genre==='History' && book.publition>1998
})
console.log(newDataOf_books);

// accessing by foreach loop

const newAr_of_bk=[]

Books.forEach( (bk)=>{
    if(bk.publition>1987 && bk.genre==='History'){
        return newAr_of_bk.push(bk)
    }
})
// console.log(newAr_of_bk);
