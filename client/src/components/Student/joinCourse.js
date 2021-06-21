import React from 'react'
// import { Field, formValues, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { joinCourse } from '../../actions'
import StreamForm from '../Teacher/CourseForm'




class JoinCourse extends React.Component {



    onSubmitCreate = (formValues) => {
        // event.preventDefault();
        // done automatically by reduxForm
        console.log(formValues)
        this.props.joinCourse(formValues)


    }
    render() {
        //  console.log(this.props)

        return (
            <div>
                <h2 style={{ fontWeight: "bolder", fontSize: "28px" }}>JOIN A COURSE</h2>
                <StreamForm onSubmit={this.onSubmitCreate} />
            </div>

        )
    }
}



export default connect(null, { joinCourse})(JoinCourse)