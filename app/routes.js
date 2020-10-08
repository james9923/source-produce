
	const express = require('express'),
		  signupController = require('./controllers/signup'),
		  cors = require('cors'),
		  offersController = require('./controllers/offers'),
		  productController = require('./controllers/products'),
		  destinationController = require('./controllers/destinations'),
		  passport = require('passport');

	const { ensureAuthenticated } = require('../config/auth');

	const allowedOrigins = [
		'capacitor://localhost',
		'ionic://localhost',
		'http://localhost',
		'http://localhost:8080',
		'http://localhost:8100'
	];
	
	// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
	const corsOptions = {
		origin: (origin, callback) => {
			if (allowedOrigins.includes(origin) || !origin) {
				callback(null, true);
			} else {
				callback(new Error('Origin not allowed by CORS'));
			}
		}
	}

		  module.exports = function(app){
			app.options('*', cors(corsOptions));
		  	app.post('/seller/register', cors(corsOptions), signupController.register);
		  	app.post('/seller/login', cors(corsOptions), passport.authenticate('local-SellerSignup', {session:false}), function(req, res, next) {
		  		res.json(req.user);
		  	});

		  	app.post('/seller/upload', cors(corsOptions), offersController.uploadOffers);

		  	app.get('/seller/upload/:email', cors(corsOptions), offersController.viewOffers);

		  	app.post('/buyer/register', cors(corsOptions), signupController.buyerRegister);

		  	app.post('/buyer/login', cors(corsOptions), passport.authenticate('local-BuyerSignup', {session:false}), function(req, res, next) {
		  		res.json(req.user);
		  	}); 

		  	app.post('/buyer/productOffers', cors(corsOptions), productController.uploadProducts);
		  	app.get('/buyer/productOffers', cors(corsOptions), productController.viewProducts);

		  	app.get('/buyer/productOffers/:product', cors(corsOptions), offersController.buyerDisplayOffers);

		  	app.post('/buyer/destination', cors(corsOptions), destinationController.fillDestination);
		  	app.get('/buyer/destination', cors(corsOptions), destinationController.viewDestination);


		  }