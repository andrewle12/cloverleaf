const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const key = require("../../server/config/keys");
const passport = require("passport");

const User = require("../../controllers/usersController");
//route to login
router.get("/test", (req,res) => {
   res.json({ msg: "Login User"});
});

//route to sign up
router.post("/signup", (req, res) => {
   User.findAll({ where: {email: req.body.email}})
      .then((user) => {
         if(user) {
            return res.status(400).json({email: "Email already in use"});
         } else {
            const newUser = new User ({
               name: req.body.name,
               email: req.body.email,
               password: req.body.password
            });
            
            //salting password
            bcrypt.genSalt(10, (err,salt) => {
               bcrypt.hash(newUser.password, salt, (err,hash) => {
                  if(err) { throw err};
                  newUser.password = hash;
                  newUser.save()
                     .then(user => res.json(user))
                     .catch(err => console.log(err));
               });
            });
         }
      });
});

//rout to login & return token
router.post("/login", (req,res) => {
   const email = req.body.email;
   const password = req.body.password;

   //find user
   User.findOne({ where: {email: req.body.email}})
      .then(user => {
         if(!user) {
            return res.status(404).json({email: "User Not Found"})
         }

         bcrypt.compare(password, user.password)
            .then((match) => {
               if(match) {
                  
                  const payload = { id: user.id,
                                    name: user.name
                                 }
                  
                  jwt.sign(payload, key.secretKey, { expiresIn: 36000}, (err, token) => {
                     res.json({
                        success: true,
                        token: "Bearer " + token
                     });
                  });

               } else {
                  return res.status(400).json({password: "Password Incorrect"})
               }
               
            });
      });
});


//gets current user
router.get("/current", passport.authenticate("jwt", {session: false}), (req,res) => {
   res.json(req.user);
})

module.exports = router;
