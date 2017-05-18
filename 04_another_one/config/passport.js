// passport has many different strategies

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('./database');

module.exports = function(passport){
	let opts = {};
	// Extract JWT will fetch the token from the header
	opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
	opts.secretOrKey = config.secret;
	// payload has the user information
	passport.use(new JwtStrategy(opts, (jwt_payload, done)=>{
		// this is a function we created in the model
		// So we keep our Mongoose operations separate 
		User.getUserById(jwt_payload._doc._id, (err, user)=>{
			if (err){
				return done(err, false);
			}

			if (user){
				return done(null, user);
			} else {
				return done(null, false);
			}
		})
	}))
}