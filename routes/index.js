const express = require('express')
const router = express.Router()
const rental = require('../models/rental')

router.get('/',async (req,res)=>{
	let search = {}
	if(req.query.area != null && req.query.area !== ''){
		search.area = new RegExp(req.query.area , 'i')
	}

	const allHouse = await rental.find(search).limit(2).sort({$natural:-1})
	res.render('index', {allHouse: allHouse,
	                        search: search
	                    })
})

module.exports = router