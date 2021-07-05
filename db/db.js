const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://todojs:<password>@cluster0.xlsfe.mongodb.net/taskapp?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true  }
)
 .then(console.log('connected succesfully'))
 .catch(err=> console.log(err))