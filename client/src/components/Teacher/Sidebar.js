import React from 'react'
import  '../Student/Sidebar.css';
import { Link } from 'react-router-dom';
import {logOut} from '../../actions'
import {connect} from 'react-redux'
class SidebarTeacher extends React.Component {
    onSignOutClick = () => {
        console.log("red")
        this.props.logOut();
    }

    render(){
    return (<div class="s-layout" >

        <div class="s-layout__sidebar" >
            <Link class="s-sidebar__trigger" to="#0">
                <i class="sidebar icon" style={{ color: "white" }}></i>
            </Link>

            <nav class="s-sidebar__nav">
                <ul>
                    <li>
                        <Link class="s-sidebar__nav-link" to="/teacher/dashboard">
                            <i class="home icon"></i><em>Home</em>
                        </Link>
                    </li>
                    <li>
                        <Link class="s-sidebar__nav-link" to="#0">
                            <i class="clipboard icon"></i><em>To-do List</em>
                        </Link>
                    </li>
                    <li>
                        <Link class="s-sidebar__nav-link" to="/teacher/dashboard/CreateCourse">
                            <i class="book icon"></i><em>Create Course</em>
                        </Link>
                    </li>
                    
                    <li >
                        <button class="s-sidebar__nav-link" onClick={this.onSignOutClick}  >
                            <i class="sign-out icon"></i><em style={{ color: "red" }}>Logout</em>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>


        <main class="s-layout__content">
            {this.props.componentToPassDown }
        </main> 
    </div>
    )
    }
}
const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}
export default connect (mapStateToProps,{logOut})(SidebarTeacher);