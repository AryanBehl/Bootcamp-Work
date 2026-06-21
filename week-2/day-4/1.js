// PROMISES :- (Means => it is a object that represents the result of asynchronous operations)

// create a new promise ->

// var promise = new Promise((resolve,reject) => {
//     return reject("Promise has resolved")
// });
// console.log(promise);

// 2. READ VALUE FROM PROMISE ->
// promise.then((res) => {
//     console.log(res);
// }).catch((rej) => {
//     console.log(rej);
// })

// QUESTION OF PROMISE :-
var count = 10;

var promise = new Promise((req,res) => {
    if(count>0){
        return res("Positive count")
    } else{
        return req("Negative count")
    }
})

promise.then((res) => {
    console.log("resolve state", res);
}).catch((err) => {
    console.log("rejected state", err);
})