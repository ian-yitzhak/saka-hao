const express = require('express')

const router = express.Router()
const rental = require('../models/rental')
const multer = require('multer')
const path = require('path')
const uploadPath = path.join('public', rental.imagesCover )
const imageTypes = ['image/jpeg', 'image/png', 'image/jpg' ]

const upload = multer({
	dest:uploadPath,
	filefilter : (req,file,callback) => {
		callback(null , imageTypes.includes(file.mimetype))

	}
})

router.get('/new', (req,res)=>{
	res.render('new')
})

router.get('/all', async(req,res)=>{
	const allHouse = await rental.find() 
	res.render('view', {allHouse: allHouse})
})


router.post('/new',upload.single('image'), async (req,res)=>{
	const fileName = req.file != null ? req.file.filename : null

	const houseInfo = new rental({
		name: req.body.name, 
		contact: req.body.contact,
		area: req.body.area,
		available: req.body.available,
		description: req.body.description,
		image: fileName
		
		
	})
	try{
		await houseInfo.save()
		res.redirect('/rent/all')
	}catch(err){
		console.log(err)
	}


})

module.exports = router