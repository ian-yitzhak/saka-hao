const express = require('express')
const fs = require('fs')
const path = require('path');
const router = express.Router()
const rental = require('../models/rental')
const multer = require('multer')



const storage = multer.diskStorage({

	destination: function(req,file,cb){
		cb(null, './public/uploads/images')
	},

	filename: function(req,file,cb){
		cb(null,Date.now() + '-' + file.originalname)
	}
})

const upload  =multer({
	storage: storage,
	limits:{
		fieldSize : 1024 * 1024 * 3,
	},
});

router.get('/new', (req,res)=>{
	res.render('new')
})

router.get('/all', async(req,res)=>{
	const allHouse = await rental.find() 
	res.render('view', {allHouse: allHouse})
})


router.post('/new',upload.single('image'), async (req,res)=>{
		const houseInfo = new rental({
		name: req.body.name, 
		contact: req.body.contact,
		area: req.body.area,
		available: req.body.available,
		description: req.body.description,
		image:req.file.filename,
		
	})
	try{
		await houseInfo.save()
		res.redirect('/rent/all')
	}catch(err){
		console.log(err)
	}


})

module.exports = router