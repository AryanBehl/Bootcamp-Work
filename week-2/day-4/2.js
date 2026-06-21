// API -> Application Programming Interface...

const api = "https://jsonplaceholder.typicode.com/todos";

// const data = fetch(api);
// console.log(data);

// fetch(api).then((res) => {
//     console.log(res);  
// })

fetch(api)
.then((res) => res.json())
.then((data) => {
    console.log(data);
    displayTable(data);
})
.catch((err) => console.log(err));

