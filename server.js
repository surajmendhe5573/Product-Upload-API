const express= require('express');
const app= express();
const mongoose= require('mongoose');
require('dotenv').config();
const productRoute= require('./routes/productRoute');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port= process.env.PORT || 4000
const MONGO_URL= process.env.MONGO_URI

// MongoDB connection
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('MongoDB Connected');
    
}).catch((err)=>{
    console.log(err);
    
})

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})

app.use('/api', productRoute);   // product route api