
import React from 'react'
import { connect } from 'react-redux'
import { fetchCourses } from '../../actions'
import { Link } from 'react-router-dom'
// import Sidebar from './Sidebar'

class Allenrolled extends React.Component {
    componentDidMount() {
        this.props.fetchCourses(this.props.Token);
    }
 
        
    


    renderList() {
        console.log(this.props)
       
           
            return (
                this.props.studentcourses.map(course => {
                    return (
                        <div class="card">
                            <div class="content">
                                <img class="right floated mini ui image" src="https://cdn.pixabay.com/photo/2018/05/19/00/53/online-3412473_960_720.jpg" />
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
                                    {/* <Link class="ui basic green button" to={`/teacher/dashboard/EditCourse/${course.id}`}>edit</Link> */}
                                    <Link class="ui basic red button" to={`/student/dashboard/unenrol/${course.id}`}>Unerol</Link>
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
                <h2 style={{ fontWeight: "bolder" ,textAlign:"center",fontSize:"28px",margin:"12px"}}>COURSES</h2>
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

        studentcourses: Object.values(state.studentcourse),
        Token: state.auth.userId,
        isSignedIn: state.auth.isSignedIn

    }
}
// export default StreamList
export default connect(mapStateToProps, { fetchCourses })(Allenrolled)
