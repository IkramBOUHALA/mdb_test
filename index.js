require('dotenv').config()
const express=require('express') 
const app=express()
const productlistRouter=require('./routes/productRoute')
const userRoute=require('./routes/userRoute')
app.use(express.json());


// database
const connectDB = require('./db/connect')

// router

app.use('/api/v1/productlist', productlistRouter )
app.use('/api/v1/user',userRoute )

const port=process.env.PORT|| 3001  
const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('database validation complited');
        app.listen(port, ()=>{
            console.log(`server is listenning on port: ${port}` )
        })
    } catch (error) {
        console.log(error);
    }
} 
start();




// app.listen(port, (req,res)=>{
//     console.log(`http://localhost:${port}`);
// })