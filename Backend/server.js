require('dotenv').config();
const connectDB=require('./config/db');
connectDB();
const app=require('./app');




app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})