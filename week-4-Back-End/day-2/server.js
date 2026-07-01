import express from "express";

// here we created server with the help of expressJS

// yaha expression function tha isliye humne isko call kara hai.
// and ye express function object return krega jo humne app me store kardiya

const app = express();
const port = 4000;

app.use(express.json());

// yaha API create kari hai

// api - /
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to the Backend!!</h1>");
// });
// // api - /about
// app.get("/about", (req, res) => {
//   res.send("<h1>About Page</h1>");
// });
// // api - /contact
// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Page</h1>");
// });
// // api - /page/job
// app.get("/page/job", (req, res) => {
//   res.send("<h1>Job Page</h1>");
// });
// // api - /page/contact
// app.get("/page/contact", (req, res) => {
//   res.send("<h1>Contact Page</h1>");
// });

// total bas yhi 4 request hai

// app.get() -> send/get

// let students = ['ankit', 'rahul', 'priya']


let users = [
  {
    name: "Ankit",
    age: 15,
    contact: 9867586548,
  },
  {
    name: "Rahul",
    age: 16,
    contact: 7659845968,
  },
  {
    name: "Priya",
    age: 17,
    contact: 6895785965,
  },
  {
    name: "Rohit",
    age: 21,
    contact: 8945631270,
  },
  {
    name: "Mohit",
    age: 19,
    contact: 7894563201,
  },
  {
    name: "Aman",
    age: 20,
    contact: 9645312568,
  },
];


// app.get() operations........
app.get("/getUser", (req, res) => {    //getUser yaha endpoint hai
  // jab bhi frontend to backend or backend to frontend data bhejna hoga to hum res.json() ka use karenge
  res.json({
    data: users,
    success: true,
    message: "data fetched successfully",
  });
});

// app.post() operations........
app.post("/createUser", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const contact = req.body.contact;

  users.push({ name, age, contact });

  console.log(users);

  res.json({
    success: true,
    message: "data created successfully",
    users,
  });
});

// app.post() -> create
// app.put()  -> update
// app.delete() -> delete

// ab server listen krega
app.listen(port, () => {
  console.log("server is running in port: ", port);
});

app.post('/createUser', (req, res) => {
    const{name} = req.body

    console.log(name)

    students.push(name)

    res.json({
        success: true,
        message: "data created successfully....",
        data: students
    })
})

app.put('/updateuser', (req, res) => {

    const{name, newName} = req.body

    let index = students.indexOf(name)

    students[index] = newName

    res.json({
        success: true,
        message: "data updated successfully....",
        data: students
    })
})

app.delete('/deleteuser', (req, res) => {
    const{name} = req.body

    const index = students.indexOf(name)

    students.splice(index, 1)

    res.json({
        message: "data deleted successfully....",
        success: true,
        data: students
    })
})