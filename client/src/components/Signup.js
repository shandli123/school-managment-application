import SignupForm from '../AuthenticationForm/SignupForm'
import React from 'react'
// import { Field, formValues, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { signUp } from '../actions'





class SignUp extends React.Component {



    onSubmitSignUp = (formValues) => {
        // event.preventDefault();
        // done automatically by reduxForm
         console.log(formValues)
        this.props.signUp(formValues)


    }
    render() {
          console.log(this.props)

        return (
            <div>
               
                <SignupForm onSubmit={this.onSubmitSignUp} />
            </div>

        )
    }
}



export default connect(null, { signUp })(SignUp)