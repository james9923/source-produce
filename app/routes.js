
	const express = require('express'),
		  signupController = require('./controllers/signup'),
		  offersController = require('./controllers/offers'),
		  productController = require('./controllers/products'),
		  passport = require('passport');

	const { ensureAuthenticated } = require('../config/auth');

		  module.exports = function(app){

		  	app.post('/seller/register', signupController.register);
		  	app.get('/seller/login', passport.authenticate('local-SellerSignup', {session:false}), function(req, res, next) {
		  		res.json(req.user);
		  	});

		  	app.post('/seller/upload', offersController.uploadOffers);

		  	app.get('/seller/upload/:email', offersController.viewOffers);

		  	app.post('/buyer/register', signupController.buyerRegister);

		  	app.get('/buyer/login', passport.authenticate('local-BuyerSignup', {session:false}), function(req, res, next) {
		  		res.json(req.user);
		  	}); 

		  	app.get('/buyer/productOffers', productController.viewProducts);

		  	app.get('/buyer/productOffers/:product', offersController.buyerDisplayOffers);


		  }