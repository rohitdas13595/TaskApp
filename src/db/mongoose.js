const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    
}).catch((error)=>{
    console.log("Error occured in connection",error)
})

