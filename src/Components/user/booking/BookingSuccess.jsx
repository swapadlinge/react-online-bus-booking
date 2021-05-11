import React, { Component } from 'react'
import HomeNavbar from '../../user/common/HomeNavbar'
import { FaRegCheckCircle } from "react-icons/fa";
import moment from "moment";

export default class BookingSuccess extends Component {
    render() {
        return (
            <div className="container justify-content-around remove-all-margin">
                <div className="row">
                    <div className="col ">
                        <HomeNavbar />
                    </div>
                </div>

                <div className="row ">
                    <div className="offset-3 col-lg-6 col-md-8">
                        <div className="card  mb-3 w-100 m-4" style={{ backgroundColor: '#E3E3E3' }}>
                            <div className="card-body d-flex flex-column align-items-center ">
                                <FaRegCheckCircle size={100} color={'	#7FFF00'} />
                                <h3>Ticket Booked Successfully</h3>
                                <p>Your booking Id id : {this.props.history.location.state.result}</p>
                            </div>
                        </div>
                    </div>
                    <div className="  col-lg-5 col-md-4">
                        <div className="card mt-4 ">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
