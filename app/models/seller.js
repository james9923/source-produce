
	const mongoose = require('mongoose');

		const sellerSchema = new mongoose.Schema({
			fname: {
				type:String,
				required:true
			},
			lname: {
				type:String,
				required:true
			},
			gender: {
				type:String,
				required:true
			},
			
			state:{
				type:String,
				required:true
			},
			country: {
				type:String,
				required:true
			},
			phoneNumber: {
				type:String,
				required:true
			},
			email: {
				type:String,
				//unique:true,
				required:true
			},
			password: {
				type: String,
				required:true
			},
			registrationDate: {
				type: Date,
				default:Date.now()
			}
		});

		module.exports = mongoose.model('Seller', sellerSchema);