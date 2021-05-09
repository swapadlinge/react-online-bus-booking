import React, { Component } from 'react';
import "./admin_dashboard.css";
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import AdminService from '../../../services/AdminService';
export default class Dashboard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            busOPerators: 0,
            buses: 0,
            users: 0,

        }
    }

    componentDidMount() {
        this.setState({ isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true' });
        if (sessionStorage.getItem('isLoggedIn') === 'false') {
            this.props.history.push("/admin-login");
        }

        AdminService.getOperatorCount().then(res => {
            this.setState({ busOPerators: res.data })
        });

        AdminService.getUserCount().then(res => {
            this.setState({ users: res.data })
        });

        AdminService.getBusCount().then(res => {
            this.setState({ buses: res.data })
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-2 col-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 col-sm-10 col-10">
                        <div className="container remove-all-margin">
                            <div className="row">
                                <Navbar />
                            </div>
                            <div className="row">
                                <div className="col mt-2 ">
                                </div>
                            </div>
                            <div className="row">

                                <div className="col mt-2 ">
                                    {this.state.isLoggedIn && <div className="div"> <h3>Welcome , {sessionStorage.getItem('username')}</h3></div>}
                                    {/* {this.state.isLoggedIn && <GetAllBusOperators />} */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mt-2 ml-4">
                                    <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
                                        {/* <div className="card-header">Header</div> */}
                                        <div className="card-body d-flex flex-column align-items-center">
                                            <h5 className="card-title">Bus Operators</h5>
                                            <p className="card-text" style={{ fontSize: '2rem' }}>{this.state.busOPerators}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mt-2 ">
                                    <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
                                        {/* <div className="card-header">Header</div> */}
                                        <div className="card-body d-flex flex-column align-items-center">
                                            <h5 className="card-title">Total Buses</h5>
                                            <p className="card-text" style={{ fontSize: '2rem' }}>{this.state.buses}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mt-2 ">
                                    <div className="card text-white bg-danger mb-3" style={{ maxWidth: '18rem' }}>
                                        {/* <div className="card-header">Header</div> */}
                                        <div className="card-body d-flex flex-column align-items-center">
                                            <h5 className="card-title">Total Users</h5>
                                            <p className="card-text" style={{ fontSize: '2rem' }}>{this.state.users}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

        )
    }
}
