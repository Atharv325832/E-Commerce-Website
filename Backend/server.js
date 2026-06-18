require('dotenv').config();
const connectDB=require('./config/db');
connectDB();
const app=require('./src/app');


console.log(process.env.MONGO_URI);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})