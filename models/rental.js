const mongoose = require('mongoose')

const rentalSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},

	contact:{
		type: String,
		required: true
	},
	area:{
		type: String,
		required: true
	},

	available:{
		type: String,
		required: true
	},

	description:{
		type: String,
		required: true
	}

	
})

module.exports = mongoose.model('Rental' , rentalSchema)