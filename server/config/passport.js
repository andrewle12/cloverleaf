const JwtStrat = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const User = require("../models/user");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKey;

module.exports = passport => {
  passport.use(
    new JwtStrat(opts, (jwt_payload, done) => {
      User.findOne({ where: { id: jwt_payload.id } })
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
