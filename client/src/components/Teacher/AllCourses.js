
import React from 'react'
import { connect } from 'react-redux'
import { fetchCoursesbyowner } from '../../actions'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

class AllCourses extends React.Component {
    componentDidMount() {
        this.props.fetchCoursesbyowner(this.props.Token);
    }
    renderAdmin(teachercourse) {
       
            return (
                <div className="right floated content">
                    <Link to={`/teacher/dashboard/EditCourse/${teachercourse.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/teacher/dashboard/DeleteCourse/${teachercourse.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            )
        }
    

    renderList() {
        console.log(this.props)
        return (
                this.props.teachercourses.map(course => {
                    return(
                        <div class="card">
                            <div class="content">
                                <img class="right floated mini ui image" src="https://cdn.pixabay.com/photo/2018/05/19/00/53/online-3412473_960_720.jpg"/>
                                    <div class="header">
                                        {course.name}
                                    </div>
                                    <div class="meta">
                                        {course.id}
                                    </div>
                                    <div class="description">
                                       this is {course.name} course with id{course.id}
                                    </div>
                                    </div>
                                <div class="extra content">
                                    <div class="ui two buttons">
                                    <Link class="ui basic green button" to={`/teacher/dashboard/EditCourse/${course.id}`}>edit</Link>
                                    <Link class="ui basic red button" to={`/teacher/dashboard/DeleteCourse/${course.id}`}>Delete</Link>
                                    </div>
                                </div>
                            </div>
                            
                    )
                

                })

            )
        
    }


    render() {
        // console.log(this.props.streams)
        return (
            <div>
                <h2 style={{fontWeight:"bolder",textAlign:"center",fontSize:"28px"}}>COURSES</h2>
                <div className="ui cards">
                    {this.renderList()}
                </div>

            </div>
        )
    }
};
const mapStateToProps = (state) => {
    // Object.values converts object to array
    return {

        teachercourses: Object.values(state.teachercourse),
        Token: state.auth.userId,
        isSignedIn: state.auth.isSignedIn

    }
}
// export default StreamList
 export default connect(mapStateToProps, { fetchCoursesbyowner })(AllCourses)
 