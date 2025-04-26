const express=require('express');
const app=express();
const PORT=3000;
app.use(express.json());
app.post('/signup',(req,res)=>{
    

    const{username,email,password,dob}=req.body
    if(!username){
       return res.status(400).json({message:"username cannot be empty"})
    }
    if(!email){
        return res.status(400).json({message:"email cannot be empty"})
    }
    if(!dob){
        return res.status(400).json({message:"dob is not found"})
    }
    if(!password || password.length < 8 || password.length > 16){
        return res.status(400).json({message:"password length greater than 8 or less than or equal to 16"})
    }
    res.status(200).json({message:"signup successful"})
})
app.get('/',(req,res)=>{
    res.send('welcome to signup')

})
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})

        
    
   

        
