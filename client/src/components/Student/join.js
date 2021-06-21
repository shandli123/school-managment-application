import React from 'react'
import JoinCourse from './joinCourse'
import Sidebar from '../Student/Sidebar'
//import CreateCourse from './CreateCourse'
const join = () => {
    return (
        <>
            <Sidebar componentToPassDown={<JoinCourse />} />

        </>
    )
}
export default join;