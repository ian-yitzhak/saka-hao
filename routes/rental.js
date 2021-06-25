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

router.get('/all', async(req,res)=>{
	const allHouse = await rental.find() 
	res.render('view', {allHouse: allHouse})
})


router.post('/new',upload.single('avatar'), async (req,res)=>{

	const houseInfo = new rental({
		name: req.body.name, 
		contact: req.body.contact,
		area: req.body.area,
		available: req.body.available,
		description: req.body.description,
		
		
	})
	try{
		await houseInfo.save()
		res.redirect('/rent/all')
	}catch(err){
		console.log(err)
	}


})

module.exports = router