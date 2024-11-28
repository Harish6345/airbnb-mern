const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const registermodal = require("./modals/Register");

const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
  .connect("mongodb://localhost:27017/?directConnection=true").then(console.log('Mongo db is connected')).catch((err)=>console.log(err))
  
app.post('/login',(req,res)=>{
       const {email,password} =req.body;
       registermodal.findOne({email:email}).then(
        (user)=>{
          if(user){
            if(user.password===password){
              res.json("success")
            }else{
              res.json("Incorrect Passcode")
            }
          }else
          res.json('user doesnot exist')
        }
       )
})



// Routes
app.post("/register", async (req, res) => {
  try {
    const user = await registermodal.create(req.body);
    res.json({ success: true, data: user });
  } catch (err) {
    console.error("Error in /register:", err.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Start the Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
