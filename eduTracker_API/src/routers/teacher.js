const express = require('express')
const router = new express.Router()
const Teacher = require('../models/Teacher')
const authT = require('../middleware/authTeacher')
const Course = require('../models/Course')



//1. CREATING THE TEACHER
router.post('/teacher', async (req, res) => {
    // console.log(req.body)

    const user = new Teacher(req.body)
    try {
        await user.save()
        const token = await user.generateTokens()
        res.status(200).send({ user, token })
    } catch (error) {
        console.log(error)
        res.status(400).send({"error":error})
    }
})


// 2. LOGGING IN OF TEACHER
router.post('/teacher/login', async (req, res) => {
    try {
        const user = await Teacher.findByCredentials(req.body.email, req.body.password)

        const token = await user.generateTokens()

        res.status(200).send({ user, token })
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})


//3. LOGOUT OF  
router.post('/teacher/logout', authT, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.status(200).send("Logged out")
    } catch (e) {
        res.status(400).send({ Error: "Already Logged Out" })
    }
})


//4. CREATING IN THE COURSES

router.post('/teacher/courseCreation', authT, async (req, res) => {
    try {
        const course = await Course.findOne({ name: req.body.name, id: req.body.id })

        if (course)
            throw new Error("Course already found. Enter Again!!")

        const newCourse = new Course({
            ...req.body,
            owner: req.user
        })
        await newCourse.save()

        // async function x(){
        // req.user.createdCourse = req.user.createdCourse.concat(newCourse)
        // await req.user.save()
        // }

        // x()
        // console.log(req.user)
        res.status(200).send(newCourse)

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }

})



//4. DELETION IN THE COURSES

router.delete('/teacher/deleteCourse/:id', authT, async (req, res) => {

    try {

        //IS COUSE PRESENT??
        console.log(req.params.id)
        const course = await Course.findOne({  id: req.params.id })
        console.log(course)
        if (!course)
            throw new Error("Course already found. Enter Again!!")


        //IS COURSE CREATED BY THAT TEACHER??
        if (!((req.user._id).equals(course.owner._id))) {
            throw new Error("You have not created this course")
        }

        // await Course.findOneAndDelete({name:req.body.name , id: req.body.id})
        const x=course;
        await course.delete()
        res.status(200).send(x)
 
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})


// 5. ALL ENROLLED COURSE

router.get('/teacher/getcourses', authT, async (req, res) => {
    try {

        let course
        if (req.query.id) {
            course = await Course.findOne({ id: req.query.id, owner: req.user._id })

        }


        else if (req.query.name) {
            course = await Course.findOne({ name: req.query.name, owner: req.user._id })

        }

        else {
            course = await Course.find({ owner: req.user._id })
        }

        if (!course) {
            throw new Error("No course is found")
        }
        res.status(200).send(course)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})
//udate
router.patch('/teacher/update/:id', authT, async (req, res) => {
  
    try {

        //FIND IF COURSE IS PRESENT AND THAT TEACHER OWNS IT
        console.log(req.params.id)
        let course = await Course.updateOne({ owner: req.user._id, id: req.params.id }, { name: req.body.name, id: req.body.id })
       console.log(course)
        course = await Course.findOne({ name: req.body.name, id: req.body.id })
        if (course.n === 0) {
            throw new Error("Unable to find the course")
        }

        res.status(200).send(course)

    } catch (e) {
        console.log(e)
        res.status(500).send({ "Error": e })

    }

})
router.get('/teacher/getcourse/:id', authT, async (req, res) => {
    try {

        course = await Course.findOne({ id: req.params.id, owner: req.user._id })
        if (!course)
            throw new Error("No such course")
        res.status(200).send(course)
    } catch (e) {
        res.status(500).send({ "error": e })
    }
})

module.exports = router