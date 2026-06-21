// CLOSURES... (Means => function + it's lexical scope)

function outer(){
    let count = 0;

    return function inner(){
        count++
        console.log(count);
    }
}

let ans = outer();
console.log(ans());
console.log(ans());
console.log(ans());