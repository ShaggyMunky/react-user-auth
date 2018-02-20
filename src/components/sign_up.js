import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {renderInput} from "../helpers";
import {signUp} from "../actions"

class SignUp extends Component {

    handleSignUp(values){
        console.log("SIGN UP", values);
        this.props.signUp(values);
    }

    render(){
        const {handleSubmit} =this.props;
        return(
            <div>
                <h1 className="center-align">Sign Up</h1>
                <div className="row">
                    <div className="col s6 offset-s3">
                        <div className="card grey lighten-5">
                            <div className="card-content">
                                <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                                    <Field name="email" placeholder="enter your email" component={renderInput}/>
                                    <Field name="password" placeholder="choose a password" type="password" component={renderInput}/>
                                    <Field name="confirmPassword" placeholder="re-enter password" type="password" component={renderInput}/>
                                    <div className="right-align">
                                        <button className="btn blue-grey darken-1">Sign Up</button>
                                    </div>
                                    <p className="red-text center-align">{this.props.authError}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(values){
    const error = {};

    if (!values.email){
        error.email = "Please enter an email";
    }

    if (!values.password){
        error.password = "please choose a password"
    }

    if (values.password !== values.confirmPassword){
        error.password = "passwords do not match"
    }

    return error
}

SignUp = reduxForm({
    form: "sign-up",
    validate: validate
})(SignUp);

function mapStateToProps(state){
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, {signUp})(SignUp);