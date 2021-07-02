const mongoose = require('mongoose')
const path = require('path')
const imagesCover = 'uploads/images'

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
	},
	image:{

		type: String,
		required: true

	}

	
})

rentalSchema.virtual('imagepath').get(function(){
	if(this.imagesCoverName != null){
		return path.join('/' , imagesCover , this.imagesCoverName)

	}
})

module.exports = mongoose.model('Rental' , rentalSchema)

module.exports.imagesCover=imagesCover