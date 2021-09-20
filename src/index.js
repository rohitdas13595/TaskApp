const express = require('express')
const userRouter= require('./routers/user');
const taskRouter= require('./routers/task');

const app = express()
const port = process.env.PORT



// app.use((req,res,next)=>{
//     if(req.method=='GET'){
//         res.send('GET requests are disabled')
//     }else{
//         next();
//     }
    
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is under maintainance. Check back soon!')
// })

app.use(express.json())
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task =require ('./models/task')
// const User=require('./models/user')

// const main = async()=>{
    
    // const task= await Task.findById('614431bc7272b4647af30a61')
    // await task.populate('owner')
    // console.log(task.owner);
    // const user= await User.findById('6144309e2535d37d79fbcd88')
    // await user.populate('tasks')
    // console.log(user.tasks);
// }
// main()