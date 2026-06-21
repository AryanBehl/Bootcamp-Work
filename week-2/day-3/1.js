// ADVANCED JAVASCRIPT QUESTION'S (interview questions OR practice)

// 1.DYNAMICALLY TYPED PROGRAMMING LANG...
// var x = 10;
// console.log(x, typeof x);

// x = true;
// console.log(x, typeof x);

// 2.HOSTING...
// console.log(name); //undefined
// console.log(age); //error

// var name = "aryan";
// let age = 10;

// console.log(name);
// console.log(age);

// hii()
// bye()
// function hii(){
//     console.log(1);

// }

// 3.LEXICAL SCOPE in JS...
// hello()
// function hello() {
//     console.log(name);
//     console.log(age);

//     if(101){
//         var name = "ram";
//         let age = 10;
//         console.log(name);
//         console.log(age);
//     }
//         console.log(name);
//         console.log(age);
// }

// 4.EXECUTION CONTEXT...

// console.log("start");
// console.log(one());

// function three(){
//     return "hello from fn 3"
// }

// function one(){
//     console.log(name);
//     var name = "chintu";
//     three()
//     console.log(name);
// }
// console.log("mid");
// two();

// function two(){
//     console.log(age);
//     var age = 10;
//     console.log(age);
//     console.log(three());
// }

// console.log("End");


// 5.TIMERS....
console.log("start");

// run only 1 time ->
setTimeout(()=>{
    console.log("hello");
    
},5000)

// run after interval again and again ->
setInterval(()=>{
    console.log("bye");
    
},2000)

console.log("end");
