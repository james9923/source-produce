
	const localStrategy = require('passport-local').Strategy;
	const mongoose = require('mongoose');
	const bcrypt = require('bcryptjs');

	const Seller = require('../app/models/seller');
	const Buyer = require('../app/models/buyer');

	module.exports = function(passport){
		passport.use('local-SellerSignup',
			new localStrategy({ usernameField: 'email' }, (email, password, done) => {

				// Match User
				Seller.findOne({ email:email })
				.then(result => {
					if(!result) {
						return done(null, false, { message: 'Email is not registered' })
					}

					// Match Password
					bcrypt.compare(password, result.password, (err, isMatch) => {
						if(err) throw err;

						if(isMatch) {
							
							return done(null, result)
						} else {
							return done(null, false, { message: 'Password incorrect' })
						}
					})
				})
				.catch(err => console.log(err));
			}));


		passport.use('local-BuyerSignup',
			new localStrategy({ usernameField: 'email' }, (email, password, done) => {

				// Match User
				Buyer.findOne({ email:email })
				.then(result => {
					if(!result) {
						return done(null, false, { message: 'Email is not registered' })
					}

					// Match Password
					bcrypt.compare(password, result.password, (err, isMatch) => {
						if(err) throw err;

						if(isMatch) {
							
							return done(null, result)
						} else {
							return done(null, false, { message: 'Password incorrect' })
						}
					})
				})
				.catch(err => console.log(err));
			}));



		
	passport.serializeUser((result, done) => {
  	done(null, result.id);
	});

	passport.deserializeUser((id, done) => {
 		 Seller.findById(id, (err, result) => {
   		 done(err, result);
 	 
 	 	});


	});

	};
