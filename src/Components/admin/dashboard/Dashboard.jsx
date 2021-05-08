import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker';
import "../../../styles/admin/admin_dashboard.css";
import GetAllBusOperators from '../GetAllBusOperators';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DatePicker from 'react-datepicker';
export default class Dashboard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,

        }
    }

    componentDidMount() {
        this.setState({ isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true' });
        if (sessionStorage.getItem('isLoggedIn') === 'false') {
            this.props.history.push("/");
        }
    }

    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-2 col-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 col-sm-10 col-10">
                        <div className="container-fluid m-0">
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
                                <div className="col mt-2 ">
                                    <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
                                        {/* <div className="card-header">Header</div> */}
                                        <div className="card-body d-flex flex-column align-items-center">
                                            <h5 className="card-title">Bus Operators</h5>
                                            <p className="card-text" style={{ fontSize: '2rem' }}>02</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mt-2 ">
                                    <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
                                        {/* <div className="card-header">Header</div> */}
                                        <div className="card-body d-flex flex-column align-items-center">
                                            <h5 className="card-title">Total Buses</h5>
                                            <p className="card-text" style={{ fontSize: '2rem' }}>12</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mt-2 ">
                                    <div className="card text-white bg-danger mb-3" style={{ maxWidth: '18rem' }}>
                                        {/* <div className="card-header">Header</div> */}
                                        <div className="card-body d-flex flex-column align-items-center">
                                            <h5 className="card-title">Total Users</h5>
                                            <p className="card-text" style={{ fontSize: '2rem' }}>245</p>
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
