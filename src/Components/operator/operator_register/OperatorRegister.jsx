import React, { Component } from 'react'
import HomeNavbar from '../../user/common/HomeNavbar'
import LoginImg from "../../../assets/login.jpg"
import { NavLink } from "react-router-dom";
import "./Login.css";
export default class OperatorRegister extends Component {

    state = {
        fields: {},
        errors: {}
    }


    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "*Please enter your First Name.";
        }

        if (typeof fields["firstName"] !== "undefined") {
            if (!fields["firstName"].match(/^[a-zA-Z]*$/)) {
                formIsValid = false;
                errors["firstName"] = "*Please use alphabet characters only.";
            }
        }

        if (!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "*Please enter your Last Name.";
        }

        if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z]*$/)) {
                formIsValid = false;
                errors["lastName"] = "*Please use alphabet characters only.";
            }
        }

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z@.]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please use alphabets, '@', '.'  only.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Password must be 8 character long and contain Uppercase, Number, Special symbol.";
            }
        }
        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    handleSignUp = (e) => {
        if (this.validateForm()) {
            alert("Registering to database");
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        });
    }

    render() {
        return (
            <div className="container justify-content-around remove-all-margin">
                <div className="row">
                    <div className="col ">
                        <HomeNavbar />
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-8 col-md-8 d-flex justify-content-center">
                        <img src={LoginImg} height="700px" alt="login-img" />
                    </div>
                    <div className=" col-lg-4 col-md-4">
                        <div className="card mt-4 ">
                            <div className="card-header ">
                                <div className="float-right btn btn-outline-danger mt-1"><NavLink className="text-dark text-decoration-none" to="/operator-login">Login</NavLink></div>
                                <h4 className="mt-2">Operator Registration</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-row">
                                    <div className="col form-group">
                                        <label>First name <span className="required-star">*</span></label>
                                        <input type="text" id="form-control" className="form-control" placeholder="" name="firstName" onChange={this.handleChange} />
                                        <span id="error-msg">{this.state.errors.firstName}</span>
                                    </div>
                                    <div className="col form-group">
                                        <label>Last name<span className="required-star">*</span></label>
                                        <input type="text" id="form-control" className="form-control" placeholder=" " name="lastName" onChange={this.handleChange} />
                                        <span id="error-msg">{this.state.errors.lastName}</span>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Mobile Number<span className="required-star">*</span></label>
                                    <input id="form-control" className="form-control" type="tel" name="mobileno" onChange={this.handleChange} />
                                    <span id="error-msg">{this.state.errors.mobileno}</span>
                                </div>

                                <div className="form-group">
                                    <label>Username<span className="required-star">*</span></label>
                                    <input id="form-control" className="form-control" type="text" name="username" onChange={this.handleChange} />
                                    <span id="error-msg">{this.state.errors.username}</span>
                                </div>

                                <div className="form-group">
                                    <label>Create password<span className="required-star">*</span></label>
                                    <input id="form-control" className="form-control" type="password" name="password" onChange={this.handleChange} />
                                    <span id="error-msg">{this.state.errors.password}</span>
                                </div>


                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block btn-register" onClick={this.handleSignUp}> Sign Up </button>
                                </div>
                                <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our
                                     <br /> Terms of use and Privacy Policy.</small>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
