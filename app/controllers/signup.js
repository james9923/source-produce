
	const bcrypt = require('bcryptjs');
	const passport = require('passport');

	const Seller = require('../models/seller');
	const Buyer = require('../models/buyer');

	exports.register = function(req, res, next) {

		let {fname, lname, gender, state, country, phoneNumber, email, password} = req.body;


			Seller.findOne({email:email}, function(err, result){
				if(err) {
					res.send(err);
				}

				if(result){
					res.json({msg:"You can't use this email"});
				} else {
					const nSeller = new Seller({
						
						fname,
						lname,
						gender,
						state,
						country,
						phoneNumber,
						email,
						password

					})

						bcrypt.genSalt(5, (err, salt) =>
							
						bcrypt.hash(nSeller.password, salt, (err, hash) => {
							//NEWLY ADDED

							if(typeof nSeller.password === 'undefined'){
								res.json({msg:'You cannot use this password'});
							}

							//END OF NEWLY ADDED
							if(err) throw err;
							// Set pasword to hashed
							nSeller.password = hash;
							// Save user
							nSeller.save()
							.then(result => {
								res.json({msg:'Data Successfully Captured. You can now proceed to login'});
								//res.redirect('/seller/login');
							})
							.catch(err => {
								console.log(err);
								res.json({msg:'Internal Server Error'});
							});
							
						}))
				}
			});
	}


	/////////////**********End of Seller Registration *****************///////////


	exports.buyerRegister = function(req, res, next) {

		let {fname, lname, state, country, companyName, roleInCompany, companyWebsite, phoneNumber,
			email, password} = req.body;


			Buyer.findOne({email:email}, function(err, result){
				if(err) {
					res.send(err);
				}

				if(result){
					res.json({msg:"You can't use this email"});
				} else {
					const nBuyer = new Buyer({
						fname,
						lname,
						state,
						country,
						companyName,
						roleInCompany,
						companyWebsite,
						phoneNumber,
						email,
						password
					})

						bcrypt.genSalt(5, (err, salt) =>
							

						bcrypt.hash(nBuyer.password, salt, (err, hash) => {
							//NEWLY ADDED SECTION
								if(typeof nBuyer.password === 'undefined') {
									res.json({msg:'You cannot use this password'});
								}

							//END OF NEWLY ADDED SECTION
							if(err) throw err;
							// Set pasword to hashed
							nBuyer.password = hash;
							// Save user
							nBuyer.save()
							.then(result => {
								res.json({msg:'Data Successfully Captured. You can now proceed to login'});
								//res.redirect('/buyer/login');
							})
							.catch(err => {
								console.log(err);
								res.json({msg:'Internal Server Error'})
							});

						}))
				}
			});
	}

