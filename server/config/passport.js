const Strat = require("passport-jwt").Strategy;
const extractJWT = require("passport-jwt").ExtractJwt;
const User = require("../models/user");
const key = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.key = key.secretKey;

module.exports = (passport) => {
   passport.use( new Strat(opts, (jwt_payload, done) => {
      User.findOne({where: {id: jwt_payload.id}})
         .then((user) => {
            if(user) {
               return done(null, user);
            }
            return done(null, false);
         })
         .catch((err) => console.log(err));
   }));
};