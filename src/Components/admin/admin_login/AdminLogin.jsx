import React, { Component } from 'react';
import LoginImg from '../../../assets/login.jpg';
import AdminService from '../../../services/AdminService';
import HomeNavbar from '../../user/common/HomeNavbar';
import './Login.css';
export default class Login extends Component {

    state = {
        username: "",
        password: "",
        isLoggedIn: false,
        usernameMsg: "",
        passwordMsg: "",
        fields: {},
        errors: {}
    }

    componentDidMount() {
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            this.props.history.push("admin/dashboard");
        }
        else {
            sessionStorage.setItem('username', '');
            sessionStorage.setItem('isLoggedIn', false);
        }
    }

    handleLogin = (event) => {
        if (this.validateForm()) {
            AdminService.adminSignIn(this.state.username, this.state.password).then(res => {
                if (res.data === '') {
                    // alert("Enter valid username or password");
                    let errors = {};
                    errors["password"] = "*Please Enter valid details";
                    this.setState({
                        errors: errors
                    });
                }
                else {
                    sessionStorage.setItem('username', 'Admin');
                    sessionStorage.setItem('isLoggedIn', true);
                    this.props.history.push("admin/dashboard");
                }
            });
        }
    }


    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z@.]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }


        // if (!fields["emailid"]) {
        //     formIsValid = false;
        //     errors["emailid"] = "*Please enter your email-ID.";
        // }

        // if (typeof fields["emailid"] !== "undefined") {
        //     //regular expression for email validation
        //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        //     if (!pattern.test(fields["emailid"])) {
        //         formIsValid = false;
        //         errors["emailid"] = "*Please enter valid email-ID.";
        //     }
        // }

        // if (!fields["mobileno"]) {
        //     formIsValid = false;
        //     errors["mobileno"] = "*Please enter your mobile no.";
        // }

        // if (typeof fields["mobileno"] !== "undefined") {
        //     if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        //         formIsValid = false;
        //         errors["mobileno"] = "*Please enter valid mobile no.";
        //     }
        // }

        // if (!fields["password"]) {
        //     formIsValid = false;
        //     errors["password"] = "*Please enter your password.";
        // }

        // if (typeof fields["password"] !== "undefined") {
        //     if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        //         formIsValid = false;
        //         errors["password"] = "*Please enter secure and strong password.";
        //     }
        // }

        this.setState({
            errors: errors
        });
        return formIsValid;
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
                            <div className="card-header">
                                <h4 className="mt-2">Admin Login</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username <span className="required-star">*</span> </label>
                                    <input type="text" name="username" id="form-control" className="form-control" value={this.state.username} onChange={this.handleChange} />
                                    <span id="error-msg">{this.state.errors.username}</span>
                                </div>
                                <div className="form-group">
                                    <label >Password <span className="required-star">*</span></label>
                                    <div className="input-group">
                                        <input type="password" name="password" id="form-control" value={this.state.password} className="form-control" onChange={this.handleChange} />

                                    </div>
                                    <span id="error-msg">{this.state.errors.password}</span>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block btn-register" onClick={this.handleLogin}> Log In </button>
                                </div>
                                <small className="text-muted">By clicking the 'Log In' button, you confirm that you accept our
              <br /> Terms of use and Privacy Policy.</small>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
