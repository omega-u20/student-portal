const express = require('express')
const app = express()
const PORT = process.env.PORT||3000

app.use(express.static('public/'))

app.get('/',(req,res)=>{
    res.status(200)
})

app.listen(PORT,()=>{
    console.log(`app alive on port:${PORT}`);
    
})