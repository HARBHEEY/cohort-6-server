const express = require('express')
const app = express()
const port = 3030
app.use(express.json())

const users =[
    { id: 1, name: 'Alice', email: 'alice@example.com' },
     { id: 2, name: 'Bob', email: 'bob@example.com' }
]

//Get all users
app.get('/users', (req, res) =>{
    res.status(200).json(users)
})

//Get a single users by id
app.get('/users/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const user = users.find( el => el.id === id);

    if(!user){
        return res.status(404).json({error: 'User not found'})
    }
    res.status(200).json(user)
})

//routehandler
app.get('/',(req, res)=>{
    res.send("server is up and running")
})

app.listen(port, () =>{
    console.log(`server is listening on port: ${port}` )
})