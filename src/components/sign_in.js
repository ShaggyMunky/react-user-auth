import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {renderInput} from "../helpers";
import {signIn} from "../actions";

class SignIn extends Component {
    handleSignIn(values){
        console.log("SIGN IN", values);
        this.props.signIn(values)
    }

    render(){
        const {handleSubmit} =this.props;
        return(
            <div>
                <h1 className="center-align">Sign In</h1>
                <div className="row">
                    <div className="col s6 offset-s3">
                        <div className="card grey lighten-5">
                            <div className="card-content">
                                <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                    <Field name="email" placeholder="enter your email" component={renderInput}/>
                                    <Field name="password" placeholder="enter your password" type="password" component={renderInput}/>
                                    <div className="right-align">
                                        <button className="btn blue-grey darken-1">Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SignIn = reduxForm({
    form: "sign-in-form"
})(SignIn);

export default connect(null, {signIn})(SignIn);