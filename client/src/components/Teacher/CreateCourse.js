import React from 'react'
// import { Field, formValues, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createCourse } from '../../actions'
import StreamForm from './CourseForm'




class CreateCourse extends React.Component {



    onSubmitCreate = (formValues) => {
        // event.preventDefault();
        // done automatically by reduxForm
         console.log(formValues)
        this.props.createCourse(formValues)


    }
    render() {
        //  console.log(this.props)

        return (
            <div>
                <h2 style={{fontWeight:"bolder",fontSize:"28px"}}>CREATE A COURSE</h2>
                <StreamForm onSubmit={this.onSubmitCreate} />
            </div>

        )
    }
}



export default connect(null, { createCourse })(CreateCourse)