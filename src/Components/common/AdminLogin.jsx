import React, { Component } from 'react'

export default class AdminLogin extends Component {

    state = {
        isLoggedIn: false,
    }


    componentDidMount() {
        sessionStorage.setItem('username', '');
        sessionStorage.setItem('isLoggedIn', false);
    }

    handleLoginClick = (e) => {
        sessionStorage.setItem('username', 'swapnil');
        sessionStorage.setItem('isLoggedIn', true);
        console.log(sessionStorage.getItem('username'));
        this.props.history.push("/dashboard");
    }

    handleLogoutClick = (e) => {
        console.log("Logout Clicked");
        sessionStorage.setItem('username', '');
        sessionStorage.setItem('isLoggedIn', false);

    }

    render() {
        return (
            <div className="container d-flex justify-content-center mt-5">
                <div className="card col-sm-6">
                    <article className="card-body">
                        <a href="#" className="float-right btn btn-outline-primary">Sign up</a>
                        <h4 className="card-title mb-4 mt-1">Sign in</h4>
                        <form>
                            <div className="form-group">
                                <label>Your email</label>
                                <input name="email" className="form-control" placeholder="Email" type="email" />
                            </div> {/* form-group// */}
                            <div className="form-group">
                                <a className="float-right" href="#">Forgot?</a>
                                <label>Your password</label>
                                <input className="form-control" placeholder="******" type="password" />
                            </div> {/* form-group// */}
                            <div className="form-group">
                                <div className="checkbox">
                                    <label> <input type="checkbox" /> Save password </label>
                                </div> {/* checkbox .// */}
                            </div> {/* form-group// */}
                            <div className="form-group">
                                {/* <button type="button" className="btn btn-primary btn-block" onClick={this.handleLoginClick()}> Login</button> */}
                                {(!this.state.isLoggedIn) && <button className="btn btn-primary btn-block" onClick={() => { this.handleLoginClick() }} > Login </button>}
                            </div> {/* form-group// */}
                        </form>
                    </article>
                </div> {/* card.// */}
            </div>
        )
    }
}
