import React from 'react'
import { connect } from 'react-redux'
import { fetchCourseofowner, editCourse } from '../../actions'
import StreamForm from './CourseForm'
import history from '../../history'
import _ from 'lodash'
import { useParams } from "react-router";


class UpateCourse extends React.Component {
    //props is coming from react-router-dom
     
    componentDidMount() {
        console.log(this.props)
        this.props.fetchCourseofowner(this.props.match.params.id)
    }
    onSubmitEdit = (formValues) => {
        //    console.log(formValues)
        this.props.editCourse(formValues,this.props.match.params.id)
    }
    render() {
        if (!this.props.teachercourse ) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2 style={{margin:"30px",textAlign:"center",fontWeight:"bolder",fontSize:"28px"}}>EDIT YOUR COURSE</h2>
                {/* initialValues is a keyword for redux-form will take that many values as the keys in the object */}
                <StreamForm initialValues={_.pick(this.props.teachercourse, 'name', 'id')} onSubmit={this.onSubmitEdit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { teachercourse: state.teachercourse[ownProps.match.params.id] };
}
export default connect(mapStateToProps, {
    fetchCourseofowner: fetchCourseofowner,
    editCourse: editCourse
})(UpateCourse)