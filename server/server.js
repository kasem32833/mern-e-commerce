const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require("./routers/auth/auth-router");

// create a database connection

mongoose.connect('mongodb+srv://admin:admin@e-commerce.bhkfh.mongodb.net/')
.then(()=>console.log("Mongodb Connected"))
.catch((error)=>console.log(error))

const app = express();
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin: ' http://localhost:5173/' ,
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cash-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true
    })

    
)

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, ()=>console.log(`Server is running on port : ${PORT}`))

app.use('/api/auth' ,authRouter)

