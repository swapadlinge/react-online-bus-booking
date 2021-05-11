import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import { MdPersonOutline } from "react-icons/md";
export default class HomeNavbar extends Component {

    state = {
        isUserLoggedIn: false,
    }
    componentDidMount() {
        if (sessionStorage.getItem('isUserLoggedIn') === "true") {
            this.setState({ isUserLoggedIn: true })
        }
    }

    handleLogoutClick = (e) => {
        e.preventDefault();
        sessionStorage.setItem('userUsername', '');
        sessionStorage.setItem('isUserLoggedIn', false);
        this.setState({ isUserLoggedIn: false })
    }
    render() {
        return (
            <div>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark  " style={{ backgroundColor: '#EB5757' }}>
                    <NavLink className="text-white" activeStyle={{ textDecoration: 'none', fontSize: '22px' }} to="/"> Online Bus Booking </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link ml-3" href="#">View Booking </a>
                            {/* <a className="nav-item nav-link" href="#">Features</a>
                            <a className="nav-item nav-link" href="#">Pricing</a>
                            <a className="nav-item nav-link " href="#">About Us</a> */}
                        </div>
                        <form className="form-inline">
                            {this.state.isUserLoggedIn && <span className="text-white">{sessionStorage.getItem('userUsername')}</span>}
                            <Dropdown>
                                <Dropdown.Toggle className="text-white" variant="" id="">
                                    < MdPersonOutline size={30} color={"white"} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/user-login">Login As User</Dropdown.Item>
                                    <Dropdown.Item href="/operator-login">Login As Operator</Dropdown.Item>
                                    <Dropdown.Item href="/admin-login">Login As Admin</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {this.state.isUserLoggedIn && <button className="btn text-white" onClick={this.handleLogoutClick}>Logout</button>}
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
