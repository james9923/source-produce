

	const mongoose = require('mongoose');

	const destinationSchema = new mongoose.Schema({
		destinationCountry: {
			type:String,
			required:true
		},

		destinationPort: {
			type:String,
			required:true
		},

		associatedBuyer:{
			type:String,
			required:true
		},

		associatedDate:{
			type:Date,
			default:Date.now()
		}
	});

	module.exports = mongoose.model('Destination', destinationSchema);


