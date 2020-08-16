
	const Destination = require('../models/destination');

	exports.fillDestination = function(req, res, next) {

			const newDestination = new Destination({
				destinationCountry: req.body.destinationCountry,
				destinationPort: req.body.destinationPort,
				associatedBuyer: req.user.fname + ' '+req.user.lname
			});

			newDestination.save(function(err){
				if(err){
				res.send(err);
			} else {
				res.send("Destination Data has been Captured");
			}
			});
	}


	exports.viewDestination = function(req, res, next) {

			Destination.find(function(err, result){
			if(err){
				res.send(err);
			} else {
				res.send(result);
			}
		});
	}