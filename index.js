const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
require('dotenv').config();

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/products',productRoute);

const port = 3000

app.get('/',(req,res) =>{
    res.send('hello this is new api')
});


mongoose.connect(process.env.DATABASE_URL)
  .then(() =>{
    console.log('Connected!'); 
    app.listen(3000, () => {
        console.log(`Example app listening on port ${port}`)
      })
   })
   .catch((err) => {
     console.log('Not connected', err.message); 
   });

   