
	const mongoose = require('mongoose');

		const buyerSchema = new mongoose.Schema({
			fname: {
				type:String,
				required:true
			},
			lname: {
				type:String,
				required:true
			},
			country: {
				type:String,
				required:true
			},
			companyName: {
				type:String,
				required:true
			},
			roleInCompany: {
				type:String,
				required:true
			},
			companyWebsite: {
				type:String
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
				default: Date.now()
			}
		})

		module.exports = mongoose.model('Buyer', buyerSchema);