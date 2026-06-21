// CURRING.... (Means => chaining of a function)

function add(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d;
            }
        }
    }
}

let ans = add(1)(2)(3)(4);
console.log(ans);