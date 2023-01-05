const express = require("express")

const Pizza = require('./models/pizzaModel')

const app=express();
const db = require("./database.js")
app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/' , ordersRoute)

app.get("/",(req,res)=>{
    res.send("server working🔥");
})
app.get("/getpizzas",(req,res)=>{
   Pizza.find({},(err,docs)=>{
    if(err){
        console.log(err);
    }
    else{
        res.send(docs);
    }
   })
})

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port🔥`)