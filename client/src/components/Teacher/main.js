import React from 'react'
import AllCourses from './AllCourses'
import Sidebar from './Sidebar'
import CreateCourse from './CreateCourse'
const main=()=>{
    return(
        <>
        <Sidebar componentToPassDown={<CreateCourse />} />
       
        </>
    )
}
export default main;