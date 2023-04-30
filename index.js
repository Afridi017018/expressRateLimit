const express = require("express")
const rateLimit = require("express-rate-limit")

const app = express();
const port = 3000;



const limiter = rateLimit({
    windowMs : 15*60*1000 ,  ///15 min
    max : 5 ,
    message: "Too many requests, please try again 15 mins later or get the premium version."
})


// app.use(limiter)         ////apply to all request


app.get("/", limiter, (req,res)=>{

    res.send("Hello_World!!!!!")
})


app.listen(port,()=>{
    console.log(`server running successfully on port ${port}`)
})
