import React, { Component } from 'react'
import HomeNavbar from '../../user/common/HomeNavbar'
import LoginImg from "../../../assets/login.jpg"
import { NavLink } from "react-router-dom";
export default class OperatorLogin extends Component {
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
                                <div className="float-right btn btn-outline-danger mt-1"><NavLink className="text-dark text-decoration-none" to="/operator-register">Register</NavLink></div>
                                <h4 className="mt-2">Operator Login</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username <span className="required-star">*</span> </label>
                                    <input type="text" name="username" id="form-control" className="form-control" onChange={this.handleChange} />
                                    <span id="error-msg"></span>
                                </div>
                                <div className="form-group">
                                    <label >Password <span className="required-star">*</span></label>
                                    <div className="input-group">
                                        <input type="password" name="password" id="form-control" className="form-control" onChange={this.handleChange} />

                                    </div>
                                    <span id="error-msg"></span>
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
