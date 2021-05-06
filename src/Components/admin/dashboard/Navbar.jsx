import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,

        }
    }

    componentDidMount() {
        this.setState({ isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true' });
    }

    handleLogoutClick = (e) => {
        console.log("Logout Clicked");
        sessionStorage.setItem('username', '');
        sessionStorage.setItem('isLoggedIn', false);
        this.props.history.push("/");
    }
    render() {
        return (
            < div className="col" >
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="/admin/get-all-operators">All Operators <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            {(this.state.isLoggedIn) && <button className="btn btn-light ml-2" onClick={() => { this.handleLogoutClick() }}> Logout </button>}
                        </form>
                    </div>
                </nav>

            </div >
        )
    }
}
