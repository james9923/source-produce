
	const mongoose = require('mongoose');

		const sellerSchema = new mongoose.Schema({
			fname: String,
			lname: String,
			gender: String,
			email: String,
			password: String
		})

		module.exports = mongoose.model('Seller', sellerSchema);