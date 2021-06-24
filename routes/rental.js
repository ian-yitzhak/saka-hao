const express = require('express')
const router = express.Router()

router.get('/new', (req,res)=>{
	res.render('new')
})

router.get('/all', (req,res)=>{
	res.render('view')
})

module.exports = router