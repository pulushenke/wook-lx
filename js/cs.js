let arr =   ['a','b','c'].map(item=>item+1);
//console.log(arr);
function ar(...args){
   return args.join('');
}

// console.log(ar(['a','b','c','d']));

function ar1(){
 //const args = Array.prototype.join.call(arguments);
 const args = Array.prototype.join.apply(arguments);
 console.log(args);
 return args;
}
//console.log(ar1(['e','f','g']));
function handleThings(opts= {}){
    return opts;
}
// console.log(handleThings(a));
function gf(){
    return '大梵圣掌'
}
let arr2= [
    ['name','一叶书'],
    ['gf','八部龙神火'],
    [gf(),'圣掌'],
]
let mapData =new Map(arr2)
  
//mapData.set(g,'八部龙神火');

console.log(mapData);
for(let keys of mapData.keys()){
    console.log(keys);
}

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;

    }
    result(){
        console.log(`1${this.x}`);
    }
    result1(){
        
    }
    
}
let p = new Point('一叶书','中原');
p.result();
 let s= Object.keys(Point.prototype);
//  console.log(s);
Object.assign(Point.prototype,{
    result2(){
        console.log(`2${y}`);
    },
    result3(){
        console.log(`${x}${y}`);
    }
})
   Object.keys(p.prototype);


