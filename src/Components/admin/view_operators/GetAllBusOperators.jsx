
import { NavLink } from "react-router-dom";
import React, { Component } from 'react'
import AdminService from '../../../services/AdminService'
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import "../common/common.css";

export default class GetAllBusOperators extends Component {

    constructor(props) {
        super(props)
        this.state = {
            busOperators: []
        }
    }

    componentDidMount() {
        AdminService.getAllBusOperators().then(res => {
            this.setState({ busOperators: res.data })
        });
        if (sessionStorage.getItem('isLoggedIn') === 'false') {
            this.props.history.push("/admin-login");
        }
    }


    deleteBusOperator = (busOperatorUsername) => {
        console.log("Deleting Operator with username : " + busOperatorUsername);
        AdminService.deleteBusOperator(busOperatorUsername);
        this.setState({ busOperators: this.state.busOperators.filter(op => op.busOperatorUsername !== busOperatorUsername) })
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
                                <div className="col">
                                    <h2 className="mt-2">All Bus Operators</h2> <br />
                                    <table className="table table-bordered">
                                        <thead className="">
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Mobile Number</th>
                                                <th scope="col"> Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.busOperators.map(op => {
                                                    return (
                                                        <tr key={op.busOperatorUsername}>
                                                            {/* <th scope="row">1</th> */}
                                                            <td> # </td>
                                                            <td> {op.firstName} </td>
                                                            <td> {op.lastName} </td>
                                                            <td> {op.busOperatorUsername} </td>
                                                            <td> {op.mobileNumber} </td>
                                                            <td>
                                                                <button style={{ marginLeft: "10px" }} onClick={() => { this.props.history.push("/admin/get-operator", { operator: op }) }} className="btn btn-info">View </button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
