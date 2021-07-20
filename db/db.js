const mongoose = require('mongoose')

mongoose.connect(
	"mongodb+srv://ian_test:<password>@ian.qfm7u.mongodb.net/Database?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true  }

	)
.then(()=> console.log('Connected successfully'))
.catch((err)=> console.log(err))

