import LoginForm from '../AuthenticationForm/LoginForm'
import React from 'react'
// import { Field, formValues, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { logIn,logOut } from '../actions'





class LogIn extends React.Component {



    onSubmitLogIn = (formValues) => {
        // event.preventDefault();
        // done automatically by reduxForm
         console.log(formValues)
        this.props.logIn(formValues)


    }
    render() {
          //console.log(this.props)

        return (
            <div>
                
                <LoginForm onSubmit={this.onSubmitLogIn} />
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}
export default connect(mapStateToProps, { logIn, logOut })(LogIn);
