import express from 'express';
// import path from 'path';
const app = express();
const port = 3000;
app.get('/', (req, res)=>{
    res.send('Hello Hello')
})

 app.listen(port, ()=>{
    console.log(`Example app is listening at localhost:${port}`)
 })