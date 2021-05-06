import React, { Component } from 'react';
import "../../../styles/admin/admin_dashboard.css";
import GetAllBusOperators from '../GetAllBusOperators';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
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
                        </div>
                    </div>

                </div>
            </div >

        )
    }
}
