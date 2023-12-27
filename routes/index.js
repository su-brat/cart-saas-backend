const express = require("express");
const jwt = require("jsonwebtoken")
const jwtPassword = "1234567"
const router = express.Router();

const apiRouter = require("./api/index");

const rootUrlHandler = require("../controllers");

router.use("/api", apiRouter);

/* GET home page. */
router.get("/", rootUrlHandler);

function userExists(username,password){
    //fetching user from the database
    //receiving the username and password as array of objects
    let userExists = false
    //write code to iterate over the users fetched from the db


    return userExists
}



router.post("/signin",(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    if (!userExists(username,password)){
        return res.status(403).json({
            msg:"Invalid user"
        })

    }
    var token = jwt.sign({ username: username}, jwtPassword)
    return res.json({
        token,
    })
})

//verifying the user
router.get("/useraccess",()=>{
    const token = req.headers.authorization
    try{
        const decoded = jwt.verify(token,jwtPassword)
        const username = decoded.username

    }catch(err){
        return res.status(403).json({
            msg:"Not the requird user"
        })
    }
})



module.exports = router;
