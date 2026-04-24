//Step 1: Import the Express module and create an instance of it
const express = require('express');

//Step 2: crerate an express application instance
const app = express();

//body parsing
app.use(express.json())

const studentInfo = [
  {name: "Alice", age: 20, grade: "A"},
  {name: "Bob", age: 21, grade: "B"},
  {name: "Charlie", age: 22, grade: "C"}
];

//if you are passing a data, use .json bcos thats what the browser understand, if u re passing a string use .send
app.get('/all-data',(req, res) =>{
  res.json(studentInfo[0])
})
//Step3: Define a route handler for GET request, for the root URL ("/") that sends a response to the client
app.get('/', (req, res) => {
  res.send('Hello World! Welcome to Express.js');
}
);

app.get('/about', (req, res) =>{
  res.send('This is about page')
})

app.get('/contact', (req, res) =>{
  res.send('this is contact page')
})

//Step 4: Start listening on a specific port (e.g., 3000) for incoming requests, it starts a HTTP server on the specific port
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}
);