// Starter Node.js backend
const express=require('express');
const app=express();
app.get('/api/search',(req,res)=>{
  res.json([{name:'Example LEGO Set',price:49.99,discount:'25%'}]);
});
app.listen(3000,()=>console.log('Running on 3000'));
