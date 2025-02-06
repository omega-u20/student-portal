const express = require('express')
const app = express()
const PORT = process.env.PORT||3000

const fs = require('fs');
fs.writeFile('built-time.js', `module.exports = '${new Date()}'`, (err) => {
  if (err) throw err;
  console.log('Build time file created successfully!');
});

app.use(express.static('public/'))

app.get('/',(req,res)=>{
    res.status(200)
})

app.post('/loging',(req,res)=>{
    console.log(req.body);
    res.redirect('/dashboard')
})

app.listen(PORT,()=>{
    console.log(`app alive on port:${PORT}`);
})