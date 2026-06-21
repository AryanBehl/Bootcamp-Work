// LOOPS IN OBJECT :-

let obj = {
    name : "Aryan",
    age : 19,
    status : true
}

// for .. in loop ->
for(let key in obj) {
    console.log(key, typeof key);
    console.log(obj.key);
    console.log(obj["key"]);    
}
