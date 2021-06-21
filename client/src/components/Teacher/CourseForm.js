import React from 'react'
import { Field,  reduxForm } from 'redux-form'

class StreamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = (formProps) => {
        //  console.log(formProps )
        //   console.log(formProps.meta)
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`

        // return <input onChange={formProps.input.onChange}
        //     value={formProps.input.value} />;

        //takes the input property{all that object onchange,value etc.} of formProps and add them to input tag as props

        return (
          
                <div style={{margin:"15px"}}>
                   
                        
                            <label>{formProps.label}</label>
                            <input {...formProps.input}  type="text"/>
                        {this.renderError(formProps.meta)}
                       
                            
                            
                            
                   
            </div>
        )
            
            // <div class="">
            // <div className={className}>
            //     <label>{formProps.label}</label>
            //     <input {...formProps.input} autoComplete="off" />
            //     {this.renderError(formProps.meta)}
            // </div>
            // </div>
        
    }
    onSubmit = (formValues) => {
        // event.preventDefault();
        // done automatically by reduxForm
        // console.log(formValues)
        this.props.onSubmit(formValues)


    }
    render() {
        //  console.log(this.props)

        return (


            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error field" style={{height:"400px"}}>
               <div className="ui inverted segment" style={{height:"400px"}}>
                    <div class="ui inverted form" >
                <div class="two fields">
                <Field name="name" component={this.renderInput} label="Enter name" />
                <Field name="id" component={this.renderInput} label="Enter course code" />
                </div>
                <button style={{position:"relative",marginBottom:"10px"}} class="ui submit button">Submit</button>
                </div>
                </div>
            </form>
        )
    }
}
const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = "please enter a title";
    }
    if (!formValues.id) {
        errors.id = "please enter a description";
    }
    return errors;
};

// 1st way to wire up connect funstion with the redux form wiring

// export default connect()( reduxForm({
//     form: 'streamCreate',validate:validate
// })(StreamCreate));


// 2nd way
export default reduxForm({
    form: 'streamForm', validate: validate
})(StreamForm)

// export default formWrapped;