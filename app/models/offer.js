
	const mongoose = require('mongoose');

		const offerSchema = new mongoose.Schema({
			email: String,
			product: String,
			tonnage: Number,
			origin: String,
			moistureContent: Number,
			stockLocation: String,
			packagePerBag: Number,
			numberOfBags: Number,
			inspection: String
		})

		module.exports = mongoose.model('Offer', offerSchema);