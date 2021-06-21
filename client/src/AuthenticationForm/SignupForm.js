import React from 'react'
import { Link } from 'react-router-dom'
import { Field, formValues, reduxForm } from 'redux-form'
import { signUp } from '../actions'
import { connect } from 'react-redux'

class SignupForm extends React.Component {
    onSubmit = (formValues) => {
         //console.log(formValues)
        this.props.onSubmit(formValues)


    }

    renderInput(formProps) {

        const className = `${formProps.icon} icon`

        return (
            <div className="field">
                <label>{formProps.label}</label>
                <div className="ui left icon input">
                    <input {...formProps.input} placeholder={formProps.placeholder} type={formProps.type} required={formProps.required} />
                    <i className={className} ></i>
                </div>
            </div>
        )

    }
    renderDropdown(formProps){
        return(
            <div className="field">
                <label>{formProps.label}</label>
                <select {...formProps.input} class="ui left icon dropdown" required placeholder="Role">
            
            <option value="STUDENT">STUDENT</option>
            <option value="TEACHER">TEACHER</option>
            
        </select>
            </div>
        )
    }

    render() {

        return (
            <div>
                <h1 style={{ textAlign: "center", fontSize: "28px", marginTop: "30px", fontWeight: "bolder" }}>Sign Up</h1>
                <div className="ui placeholder segment">

                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <Field name="name" component={this.renderInput} label="Name" icon="user" type="text" required={true} placeholder="Name" />
                                <Field name="role" component={this.renderInput} label="Role"  type="text"  required={true} placeholder="student/teacher" />
                                <p style={{ textAlign: "center", fontWeight: "bolder" }}>**If you are a Student please Enter USN**</p>
                                <Field name="USN" component={this.renderInput} label="USN" icon="user" type="text" placeholder="USN" />
                                <Field name="email" component={this.renderInput} label="Email" icon="user" type="email" required placeholder="Email" required={true} />
                                <Field name="password" component={this.renderInput} label="Password" icon="lock" type="password" required={true} placeholder="password" />
                                <button className="ui blue submit button">Sign Up</button>
                            </form>
                        </div>
                        <div className="middle aligned column">
                            <Link to="/login" className="ui big green button">
                                <i className="signup icon"></i>
                             Log In
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        )
    }

}

export default reduxForm({
    form: 'signupForm'
})(SignupForm)
