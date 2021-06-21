const express = require('express')
require('./db/mongoose')
const teacherRouter = require('./routers/teacher')
const studentRouter = require('./routers/student')
const common = require('./routers/common')
// const eventRouter = require('./routers/event')
var cors = require('cors')


const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
// app.use(eventRouter)
app.use(teacherRouter)
app.use(studentRouter)
app.use(common)

app.listen(port, () => {
    console.log('Server up on port:', port)
})