import React from 'react'
//import AllCourses from './AllCourses'
import Sidebar from './Sidebar'
import UpdateCourse from './UpdateCourse'
const main = () => {
    return (
        <>
            <Sidebar  componentToPassDown={<UpdateCourse/>} />

        </>
    )
}
export default main;