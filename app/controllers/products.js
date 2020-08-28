

	const Product = require('../models/product');


	exports.uploadProducts = function(req, res, next) {

			const newProduct = new Product({
				productName: req.body.productName,
				imageName: req.body.imageName
			});

			newProduct.save(function(err){
				if(err){
					res.send(err);
				} else {
					res.json({msg:"Product Data Successfully Captured"});
				}
			});

	}



	exports.viewProducts = function(req, res, next) {
		Product.find(function(err, result){
			if(err){
				res.send(err);
			} else {
				res.send(result);
			}
		});
	}