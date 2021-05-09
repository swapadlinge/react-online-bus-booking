import { NavLink } from "react-router-dom";
import React, { Component } from 'react'
import AdminService from '../../../services/AdminService'
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import { FaRupeeSign } from "react-icons/fa";
import "../common/common.css";
export default class GetRevenueByOperator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            busOperators: [],
            username: false,
            revenue: 0,
        }
    }

    fetchRevenue(operatorUsername) {
        AdminService.getRevenueByBusOperator(operatorUsername).then(res => {
            this.setState({ revenue: res.data })
        }).catch(err => {
            this.setState({ revenue: 0 })
        })
    }

    componentDidMount() {
        AdminService.getAllBusOperators().then(res => {
            this.setState({ busOperators: res.data })
        });
        if (sessionStorage.getItem('isLoggedIn') === 'false') {
            this.props.history.push("/admin-login");
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
                        <div className="container remove-all-margin">
                            <div className="row">
                                <Navbar />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h2 className="mt-2">Revenue By Operator</h2> <br />
                                    <div className="d-flex">
                                        <table className=" mr-5 table table-bordered w-50">
                                            <thead className="">
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col">Username</th>
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
                                                                <td> {op.busOperatorUsername} </td>

                                                                <td>
                                                                    <button style={{ marginLeft: "10px" }} onClick={() => { this.setState({ username: op.busOperatorUsername }); this.fetchRevenue(op.busOperatorUsername) }} className="btn btn-info"> View Revenue </button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                        {this.state.username && <div className="card text-white bg-success mb-3 " >
                                            {/* <div className="card-header">Header</div> */}
                                            <div className="card-body d-flex flex-column align-items-center">
                                                <FaRupeeSign className="mt-3" size={50} />
                                                <h1 className="mt-3">{this.state.revenue}</h1>
                                                <p className="mt-3">Username : {this.state.username}</p>
                                            </div>
                                        </div>}
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
