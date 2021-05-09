import React, { Component } from 'react'
import AdminService from '../services/AdminService'
import Navbar from '../Components/admin/common/Navbar';
import Sidebar from '../Components/admin/dashboard/Sidebar';
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
            alert("Please Login !!");
            this.props.history.push("/");
        } else {
            // alert(typeof sessionStorage.getItem('isLoggedIn'))
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
                        <div className="container-fluid">
                            {/* Navbar Start */}
                            <Navbar />
                            {/* Navbar End */}


                            <div className="row">
                                <div className="col">
                                    <h2>All Bus Operators</h2> <br />
                                    <table className="table table-striped">
                                        <thead className="thead-dark">
                                            <tr>
                                                {/* <th scope="col">#</th> */}
                                                <th scope="col">Bus Operator Username</th>
                                                <th scope="col">Password</th>
                                                <th scope="col">Operational Buses</th>
                                                <th scope="col"> Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr> */}
                                            {
                                                this.state.busOperators.map(op => {
                                                    return (

                                                        <tr key={op.busOperatorUsername}>
                                                            {/* <th scope="row">1</th> */}
                                                            <td> {op.busOperatorUsername} </td>
                                                            <td> ***** </td>
                                                            <td>
                                                                <ul>
                                                                    {
                                                                        op.operationalBuses.map(bus =>
                                                                            <div key={bus.busNumber}>{bus.busNumber}</div>
                                                                        )
                                                                    }
                                                                </ul>
                                                            </td>
                                                            <td>
                                                                {/* <button className="btn btn-info">Update </button> */}
                                                                {/* <button style={{ marginLeft: "10px" }} onClick={() => this.deleteBusOperator(op.busOperatorUsername)} className="btn btn-danger">Delete </button> */}
                                                                <button style={{ marginLeft: "10px" }} className="btn btn-info">View </button>
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
            </div >
        )
    }
}
