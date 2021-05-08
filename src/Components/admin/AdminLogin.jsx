import React, { Component } from 'react';
import LoginImg from '../../assets/login.jpg';
import AdminService from '../../services/AdminService';
// import '../../styles/common/Login.css';
export default class Login extends Component {

    state = {
        username: "",
        password: "",
        isLoggedIn: false,
    }

    componentDidMount() {
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            // alert("Please Login !!");
            this.props.history.push("/dashboard");
        }
        else {
            sessionStorage.setItem('username', '');
            sessionStorage.setItem('isLoggedIn', false);
        }
    }


    handleLogin = (event) => {
        AdminService.adminSignIn(this.state.username, this.state.password).then(res => {
            if (res.data === '') {
                alert("Enter valid username or password");
            }
            else {
                sessionStorage.setItem('username', 'Admin');
                sessionStorage.setItem('isLoggedIn', true);
                this.props.history.push("/dashboard");
            }
        });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="container justify-content-around remove-all-margin">

                <div className="row">
                    <div className="col ">

                        <nav className="navbar sticky-top navbar-expand-lg navbar-dark  " style={{ backgroundColor: '#EB5757' }}>
                            <a href="#" className="navbar-brand">Online Bus Booking</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                                    <a className="nav-item nav-link" href="#">Features</a>
                                    <a className="nav-item nav-link" href="#">Pricing</a>
                                    <a className="nav-item nav-link " href="#">About Us</a>
                                </div>
                                <form className="form-inline">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search Buses" aria-label="Search" />
                                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                    </div>

                </div>

                <div className="row ">
                    <div className="col-lg-8 col-md-8 d-flex justify-content-center">
                        <img src={LoginImg} height="700px" alt="login-img" />
                    </div>
                    <div className=" col-lg-4 col-md-4">
                        <div className="card mt-4 ">
                            <div className="card-header">
                                <a href="#" className="float-right btn btn-outline-primary mt-1">Log in</a>
                                <h4 className="mt-2">Admin Login</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username </label>
                                    <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.handleChange} />
                                    <span id="firstname-msg">
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <div className="input-group">
                                        <input type="password" name="password" value={this.state.password} className="form-control" onChange={this.handleChange} />
                                    </div>
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
