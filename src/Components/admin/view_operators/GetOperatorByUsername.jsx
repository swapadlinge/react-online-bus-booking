
import React, { Component } from 'react'
import AdminService from '../../../services/AdminService'
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import "../common/common.css";
import { FaUserCircle, FaBus } from "react-icons/fa";
export default class GetOperatorByUsername extends Component {
    componentDidMount() {
        console.log(this.props.location.state.operator);
    }
    render() {
        return (
            <div>
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
                                    <div className="col ">
                                        <h2 className="mt-2">Operator Information</h2> <br />
                                        <div className="d-flex justify-content-center">
                                            <div className="card text-light bg-success mb-3 mr-3 w-50" >
                                                {/* <div className="card-header">Header</div> */}
                                                <div className="card-body d-flex flex-column align-items-center">
                                                    {/* <h5 className="card-title">Total Buses</h5> */}
                                                    <FaUserCircle size={100} />
                                                    <div className="mt-4">
                                                        <h5 className="m-4"> Operator Information</h5>
                                                        <table className="table text-white">
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">First Name</th>
                                                                    <td>{this.props.location.state.operator.firstName}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">Last Name</th>
                                                                    <td>{this.props.location.state.operator.lastName}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">Mobile Number</th>
                                                                    <td>{this.props.location.state.operator.mobileNumber}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">Username</th>
                                                                    <td>{this.props.location.state.operator.busOperatorUsername}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <h5 className="m-4"> Operational Buses</h5> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card text-light bg-success mb-3 w-50"  >
                                                {/* <div className="card-header">Header</div> */}
                                                <div className="card-body d-flex flex-column align-items-center">
                                                    {/* <h5 className="card-title">Total Buses</h5> */}
                                                    <FaBus size={80} className="mt-2" />
                                                    <div className="mt-4">
                                                        <h5 className="m-4"> Operational Buses</h5>
                                                        <table className="table text-white">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Bus Number</th>
                                                                    <th scope="col">Total Seats</th>
                                                                    <th scope="col">Source</th>
                                                                    <th scope="col">Destination</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    this.props.location.state.operator.operationalBuses.map(
                                                                        bus => <tr key={bus.busNumber}>
                                                                            <td>{bus.busNumber}</td>
                                                                            <td>{bus.totalSeats}</td>
                                                                            <td>{bus.busRoute.source}</td>
                                                                            <td>{bus.busRoute.destination}</td>
                                                                        </tr>
                                                                    )
                                                                }
                                                            </tbody>
                                                        </table>
                                                        {/* <h5 className="m-4"> Operational Buses</h5> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
