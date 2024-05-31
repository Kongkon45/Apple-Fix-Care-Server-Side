const express = require("express");
const cors = require("cors");


const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


// home route 
app.get("/", (req, res)=>{
    res.status(200).json({
        message : "Server is Ready"
    })
})

// not found route 
app.use((req, res, next)=>{
    res.status(404).json({
        message : "This url is not found!"
    })
})

// server error or server broke 
app.use((err, req, res, next)=>{
    res.status(500).json({
        message : "Server someting broke!"
    })
})


const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is runing successfully at http://localhost:${PORT}`)
})
