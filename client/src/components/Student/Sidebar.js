import React from 'react'
import  './Sidebar.css';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions'
import {connect} from 'react-redux'
class Sidebar extends React.Component{
    render(){
   return( <div class="s-layout" >
       
       <div class="s-layout__sidebar" >
            <Link class="s-sidebar__trigger" href="#0">
                <i class="sidebar icon" style={{color:"white"}}></i>
            </Link>

            <nav class="s-sidebar__nav">
                <ul>
                    <li>
                       <Link class="s-sidebar__nav-link" to="/student/dashboard">
                            <i class="home icon"></i><em>Home</em>
                        </Link>
                    </li>
                    <li>
                       <Link class="s-sidebar__nav-link" to="/student/dashboard/joincourse">
                            <i class="home icon"></i><em>Join class</em>
                        </Link>
                    </li>
                    <li>
                        <Link class="s-sidebar__nav-link" to="#0">
                            <i class="clipboard icon"></i><em>To-do List</em>
                        </Link>
                    </li>
                    <li>
                       <a class="s-sidebar__nav-link" href="https://get-class-link-tq-mohit.herokuapp.com/" target="_blank">
                            <i class="linkify icon"></i><em>Links</em>
                        </a>
                    </li>
                    <li>
                        <Link class="s-sidebar__nav-link" to="#0">
                            <i class="user icon"></i><em>Bot</em>
                        </Link>
                    </li>
                    <li>
                       <Link class="s-sidebar__nav-link" onClick={()=>{this.props.logOut();}}>
                            <i class="sign-out icon"></i><em style={{color:"red"}}>Logout</em>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

      
        <main class="s-layout__content">
           {this.props.componentToPassDown}
        </main>
    </div>
   )
    }
}
const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}
export default connect(mapStateToProps, { logOut })(Sidebar);