const express = require("express");
const router = express.Router();

const User = require("../../models/User");
//route to login
router.get("/", (req,res) => {
   res.json({ msg: "Login User"});
});

//route to sign up
router.post("/signup", (req, res) => {

})

module.exports = router;
