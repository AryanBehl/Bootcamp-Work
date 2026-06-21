// OBJECT DATA TYPE :-

// Non-Primitive
// collection of key value pair
// Mutable
// dynamic in size/length
// key data type -> String, value -> anything
// key ->  unique, value -> can be duplicate

// CRUD :-
// 1.CREATE ->
let obj = {};
obj = {
    id : 23,
    name : "Aryan",
    hobbies : ["sports", "games", "travelling"],
    status : false,
    address : {
        city : "gurgaon",
    }
}

// 2.READ ->
console.log(obj, typeof obj);

// bracket nottation ex.obj"key
// dot notation ex.obj.key


// 3.UPDATE ->
obj["status"] = true
obj.name = "ARYAN"
console.log(obj);

// create a new key pair ->
obj.email = "aryan@123"

console.log(obj);

// 4. DELETE ->
delete obj["email"]
delete obj.id

console.log(obj);
   