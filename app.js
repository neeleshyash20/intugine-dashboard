const express = require('express');
const port = process.env.PORT || 4000;

const app = express();


app.get('/' , (req, res) =>{
    res.send("hie");
})
app.listen(port , () => {
    console.log(`listening on port "http://localhost/${port}"`);
})

