
	const express = require("express"),
		bodyParser = require('body-parser'),
		// cors = require('cors'),
		mongoose = require('mongoose');

	const session = require('express-session');
	const MemoryStore = require('memorystore') (session);
	const passport = require('passport');

		require('./config/passport')(passport);
		//require('./config/pass')(passport);

		const app = express();
		// app.use(cors());
		// app.use((req, res, next) => {
  		// 	res.setHeader('Access-Control-Allow-Origin', '*');
  		// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  		// 	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type,Authorization');
 		//      next();
		// });

		const db = require('./config/database');
		const route = require('./app/routes');

		mongoose.connect(db.url, {useNewUrlParser:true, useUnifiedTopology:true});
		app.use(bodyParser.urlencoded({extended:false}));
		app.use(express.json());

		app.use(session({
		  secret: 'secret',
		  resave: true,
		  saveUninitialized: true,
		  store: new MemoryStore({
		  	checkPeriod:86400000
		  })
		}));

			// Passport middleware
		app.use(passport.initialize());
		app.use(passport.session());
		

		app.use('/routes', require('./app/routes'));

		route(app);

		app.listen(process.env.PORT || 4100, function(){
			console.log('Server started on port 4100')
		})