const express = require('express')
const multer = require('multer')
const router = express.Router()
const rental = require('../models/rental')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads')
    },
    filename: (req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname) )
    }

})
const upload = multer({storage: storage})

router.get('/new', (req,res)=>{
	res.render('new')
})

router.get('/all', (req,res)=>{
	res.render('view')
})


router.post('/new',upload.single('avatar'), async (req,res)=>{

	const houseInfo = new rental({
		name: req.body.name, 
		contact: req.body.contact,
		available: req.body.available,
		description: req.body.description,
		img:req.file.image
		
	})
	try{
		await houseInfo.save()
		res.redirect('/all')
	}catch(err){
		console.log(err)
	}


})

module.exports = router