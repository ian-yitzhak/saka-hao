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

	availability:{
		type: String,
		required: true
	},

	description:{
		type: String,
		required: true
	},

	img:{
		data: Buffer, 
        contentType: String
	}

	
})

module.exports = mongoose.model('Rental' , rentalSchema)