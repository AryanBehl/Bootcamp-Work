// EVENT LOOP :- sbse important topic in JS :

console.log("start"); //start

setTimeout(()=>{
    console.log(two());
    three()
},5)

function one(){
    return 1
    three();
    console.log("hello from one fn");
}
console.log("mid");

function two(){
    console.log(name);
    var name = "ram";
    console.log(name);
    console.log(three());
    console.log("hello from two fn");
    return 2
}

setInterval(()=>{
    three()
},10000)

function three(){
    console.log("hello from three fn");
    return 3
}

setTimeout(()=>{
    console.log(one());
},0)


console.log("end");