
	const express = require('express'),
		  signupController = require('./controllers/signup'),
		  offersController = require('./controllers/offers'),
		  productController = require('./controllers/products'),
		  destinationController = require('./controllers/destinations'),
		  passport = require('passport');

	const { ensureAuthenticated } = require('../config/auth');

		  module.exports = function(app){

		  	app.post('/seller/register', signupController.register);
		  	app.post('/seller/login', passport.authenticate('local-SellerSignup', {session:false}), function(req, res, next) {
		  		res.json(req.user);
		  	});

		  	app.post('/seller/upload', offersController.uploadOffers);

		  	app.get('/seller/upload/:email', offersController.viewOffers);

		  	app.post('/buyer/register', signupController.buyerRegister);

		  	app.post('/buyer/login', passport.authenticate('local-BuyerSignup', {session:false}), function(req, res, next) {
		  		res.json(req.user);
		  	}); 

		  	app.post('/buyer/productOffers', productController.uploadProducts);
		  	app.get('/buyer/productOffers', productController.viewProducts);

		  	app.get('/buyer/productOffers/:product', offersController.buyerDisplayOffers);

		  	app.post('/buyer/destination', destinationController.fillDestination);
		  	app.get('/buyer/destination', destinationController.viewDestination);


		  }