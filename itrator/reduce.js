const MyNums=[1,2,3]

// const MySum=MyNums.reduce(function (acc ,currVal){
//     console.log(`acc is = ${acc} and current value is = ${currVal}`);
//     return acc+currVal
// },0)
// console.log(MySum);

const myTotal=MyNums.reduce( (acc, curVal)=>{
    return acc+curVal
},0)

// console.log(myTotal);

const Shoppingcart=[
    {itemNmae:'Iphone',
     price:70000
    },
    {itemNmae:'DrumSuit',
     price:7000
    },
    {itemNmae:'Laptop',
     price:90000
    },
    {itemNmae:'bag',
     price:8000
    }
]
const myTotal_Price=Shoppingcart.reduce( (acc,item)=>{
    return acc+item.price
},0)
console.log(`my total shopping cost is = ${myTotal_Price} rs`);
