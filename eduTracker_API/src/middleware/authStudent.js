const jwt = require('jsonwebtoken')
const Student = require('../models/Student')

const authStudent = async (req,res,next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ' , '')
        const decode = jwt.verify(token , 'thiscourseisshit')
        console.log(decode)
        // decoded token has an id property set in it as given during encription
        //tokens.token : token is to verify if the user has the token or not if it has expired or not
        const user = await Student.findOne({_id : decode._id , 'tokens.token' : token})
         
        if(!user){
            throw new Error()
        }
        req.token = token
        req.user = user
        next()      

    }catch (e) {
        res.status(401).send({error :'Please Authenticate'})
    }

}

module.exports = authStudent