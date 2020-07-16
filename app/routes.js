
	const express = require('express'),
		  signupController = require('./controllers/signup'),
		  offersController = require('./controllers/offers'),
		  passport = require('passport');

	const { ensureAuthenticated } = require('../config/auth');

		  module.exports = function(app){

		  	app.post('/seller/register', signupController.register);
		  	app.get('/seller/login', passport.authenticate('local', {session:false}), function(req, res, next) {
		  		res.json(req.user);
		  	});

		  	app.post('/seller/upload', offersController.uploadOffers);

		  	app.get('/seller/upload/:email', offersController.viewOffers);
		  }