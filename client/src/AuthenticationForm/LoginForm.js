import React from 'react'
import { Link } from 'react-router-dom'
import { Field, formValues, reduxForm, submit } from 'redux-form'


class LoginForm extends React.Component{
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    renderInput(formProps) {
        const className = `${formProps.icon} icon`
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <div className="ui left icon input">
                    <input {...formProps.input} type={formProps.type} />
                    <i className={className} ></i>
                </div>
            </div>
        )

    }

    render() {
        return(
            <div> 
             <h1 style={{textAlign:"center",fontSize:"28px",margin:"20px",fontWeight:"bolder"}}>Log In</h1>
        <div className="ui placeholder segment">
            <div className="ui two column very relaxed stackable grid">
                <div className="column">
                            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        <Field name="email" component={this.renderInput} label="Email" icon="user" type="email" />
                        <Field name="password" component={this.renderInput} label="Password" icon="lock" type="password" />
                        <button  className="ui blue submit button">Login</button>
                    </form>
                </div>
                <div className="middle aligned column">
                    <Link to="/signup" class="ui big green button">
                        <i className="signup icon"></i>
                             Sign Up
                            </Link>
                </div>
            </div>
            
        </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm)
