const express = require('express')
const app = express()
const PORT = process.env.PORT||3000

app.use(express.static('public/'))

app.get('/',(req,res)=>{
    res.send(req.query)
    
})

app.listen(PORT,()=>{
    console.log(`app alive on port:${PORT}`);
    
})