import React from 'react'
import Allenrolled from './Allenrolled'
import Sidebar from '../Student/Sidebar'

const Dashboard = () => {
    return (
        <>
            <Sidebar componentToPassDown={<Allenrolled />} />

        </>
    )
}
export default Dashboard;