import { NavLink } from "react-router-dom";
import React, { Component } from 'react'
import AdminService from '../../../services/AdminService'
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import { FaRupeeSign } from "react-icons/fa";
import "../common/common.css";
export default class GetRevenueByRoute extends Component {

    constructor(props) {
        super(props)
        this.state = {
            routes: [],
            routeName: false,
            revenue: 0,
        }
    }


    fetchRevenue(routeName) {
        AdminService.getRevenueByBusRoute(routeName).then(res => {
            this.setState({ revenue: res.data })
        }).catch(err => {
            this.setState({ revenue: 0 })
        })
    }

    componentDidMount() {
        AdminService.getAllBusRoute().then(res => {
            this.setState({ routes: res.data })
        })

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
                                    <h2 className="mt-2">Revenue By Bus Route</h2> <br />

                                    <div className="d-flex">

                                        <table className=" mr-5 table table-bordered w-50">
                                            <thead className="">
                                                <tr>
                                                    <th scope="col"> </th>
                                                    <th scope="col">Route Name</th>
                                                    <th scope="col"> Source</th>
                                                    <th scope="col"> Destination</th>
                                                    <th scope="col"> Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.routes.map(route => {
                                                        return (
                                                            <tr key={route.routeName}>
                                                                {/* <th scope="row">1</th> */}
                                                                <td> # </td>
                                                                <td> {route.routeName} </td>
                                                                <td> {route.source} </td>
                                                                <td> {route.destination} </td>
                                                                <td>
                                                                    <button style={{ marginLeft: "10px" }} onClick={() => { this.setState({ routeName: route.routeName }); this.fetchRevenue(route.routeName) }} className="btn btn-info"> View Revenue </button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </tbody>
                                        </table>

                                        {this.state.routeName && <div className="card text-white bg-success mb-3 " >
                                            {/* <div className="card-header">Header</div> */}
                                            <div className="card-body d-flex flex-column align-items-center">
                                                <FaRupeeSign className="mt-3" size={50} />
                                                <h1 className="mt-3">{this.state.revenue}</h1>
                                                <p className="mt-3">Route Name : {this.state.routeName}</p>
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
