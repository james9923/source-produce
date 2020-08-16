
	const mongoose = require('mongoose');

		const offerSchema = new mongoose.Schema({
			email: {
				type:String,
				required:true
			},
			product: {
				type:String,
				required:true
			},
			tonnage: {
				type:Number,
				required:true
			},
			origin: {
				type:String,
				required:true
			},
			moistureContent: {
				type:Number,
				required:true
			},
			stockLocation: {
				type:String,
				required:true
			},
			packagePerBag: {
				type:Number,
				required:true
			},
			numberOfBags: {
				type:Number,
				required:true
			},
			inspection: {
				type:String,
				required:true
			},

			price:{
				type:String,
				required:true
			},

			shipmentDate:{
				type:String,
				required:true
			},

			date: {
				type:Date,
				default: Date.now()
			}
		});

		module.exports = mongoose.model('Offer', offerSchema);