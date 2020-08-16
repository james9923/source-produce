

	

	const mongoose = require('mongoose');

	const productSchema = new mongoose.Schema({
		productName: {
			type:String,
			required:true
		},

		imageName: {
			type:String,
			required:true
		}
	});

	module.exports = mongoose.model('Product', productSchema);



