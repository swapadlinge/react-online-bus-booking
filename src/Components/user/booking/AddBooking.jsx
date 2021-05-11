import React, { Component } from 'react'
import HomeNavbar from '../../user/common/HomeNavbar'
import LoginImg from "../../../assets/login.jpg"
import { NavLink } from "react-router-dom";
import moment from "moment";
import UserService from '../../../services/UserService';
export default class AddBooking extends Component {

    state = {
        fields: {},
        errors: {},
        bookingInfo: {}
    }

    componentDidMount() {

    }


    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "*Please enter your First Name.";
        }

        if (typeof fields["firstName"] !== "undefined") {
            if (!fields["firstName"].match(/^[a-zA-Z]*$/)) {
                formIsValid = false;
                debugger;
                errors["firstName"] = "*Please use alphabet characters only.";
            }
        }

        if (!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "*Please enter your Last Name.";
        }

        if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z]*$/)) {
                formIsValid = false;
                errors["lastName"] = "*Please use alphabet characters only.";
            }
        }


        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["identityDocumentName"]) {
            formIsValid = false;
            errors["identityDocumentName"] = "*Please enter your ID Document Name.";
        }

        if (!fields["identityDocNumber"]) {
            formIsValid = false;
            errors["identityDocNumber"] = "*Please enter your ID Document Number.";
        }

        if (typeof fields["identityDocNumber"] !== "undefined") {
            if (!fields["identityDocNumber"].match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["identityDocNumber"] = "*Only numbers are allowed";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        });
    }

    handleBooking = (e) => {

        if (this.validateForm()) {

            let passenger = this.state;
            let bookingInfo = this.props.history.location.state.bookingInfo;
            let bookingObj = {
                "username": sessionStorage.getItem('userUsername'),
                "passengersInfo": [{
                    "firstName": passenger.firstName,
                    "lastName": passenger.lastName,
                    "phoneNumber": parseInt(passenger.mobileno),
                    "email": passenger.emailid,
                    "identityDocNumber": parseInt(passenger.identityDocNumber),
                    "identityDocumentName": passenger.identityDocumentName
                }],
                "bus": {
                    "busNumber": bookingInfo.busNumber
                },
                "source": bookingInfo.source,
                "destination": bookingInfo.destination,
                "numberOfSeats": 1,
                "amountPaid": bookingInfo.fare,
                "date": bookingInfo.date,
                "journeyStartTime": bookingInfo.startTime,
                "journeyEndTime": bookingInfo.endTime
            }

            console.log(bookingObj);
            alert("Registering to database");

            UserService.addBooking(bookingObj).then(res => {
                this.props.history.push("/booking-success", { result: res.data });
            }).catch(err => {
                console.log(err);
            })

        }
    }


    render() {
        return (
            <div className="container justify-content-around remove-all-margin">
                <div className="row">
                    <div className="col ">
                        <HomeNavbar />
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-6 col-md-8 d-flex justify-content-center">
                        <div className="card  mb-3 w-100 m-4" style={{ backgroundColor: '#E3E3E3' }}>
                            <div className="card-body ">
                                <h5 className="">Booking Details</h5>
                                <table class="table mt-5">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Bus Number</th>
                                            <td>{this.props.history.location.state.bookingInfo.busNumber}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Source</th>
                                            <td>{this.props.history.location.state.bookingInfo.source}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Destination</th>
                                            <td>{this.props.history.location.state.bookingInfo.destination}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Date</th>
                                            <td>{moment(this.props.history.location.state.bookingInfo.date).format("MM-DD-YYYY")}</td>
                                        </tr>
                                        <tr className="">
                                            <th scope="row"><h5>Total Amount </h5></th>
                                            <td> <h5> INR. {this.props.history.location.state.bookingInfo.fare}</h5></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="  col-lg-5 col-md-4">
                        <div className="card mt-4 ">
                            <div className="card-header ">
                                <h4 className="mt-2">Passenger Details</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-row">
                                    <div className="col form-group">
                                        <label>First name <span className="required-star">*</span></label>
                                        <input type="text" id="form-control" className="form-control" placeholder="" name="firstName" onChange={this.handleChange} />
                                        <span id="error-msg">{this.state.errors.firstName}</span>
                                    </div>
                                    <div className="col form-group">
                                        <label>Last name<span className="required-star">*</span></label>
                                        <input type="text" id="form-control" className="form-control" placeholder=" " name="lastName" onChange={this.handleChange} />
                                        <span id="error-msg">{this.state.errors.lastName}</span>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Mobile Number<span className="required-star">*</span></label>
                                    <input id="form-control" className="form-control" type="tel" name="mobileno" onChange={this.handleChange} />
                                    <span id="error-msg">{this.state.errors.mobileno}</span>
                                </div>

                                <div className="form-group">
                                    <label>E-Mail<span className="required-star">*</span></label>
                                    <input id="form-control" className="form-control" type="text" name="emailid" onChange={this.handleChange} />
                                    <span id="error-msg">{this.state.errors.emailid}</span>
                                </div>

                                <div className="form-row">
                                    <div className="col form-group">
                                        <label>ID Document Name <span className="required-star">*</span></label>
                                        <input type="text" id="form-control" className="form-control" placeholder="" name="identityDocumentName" onChange={this.handleChange} />
                                        <span id="error-msg">{this.state.errors.identityDocumentName}</span>
                                    </div>
                                    <div className="col form-group">
                                        <label>ID Document Number<span className="required-star">*</span></label>
                                        <input type="text" id="form-control" className="form-control" placeholder=" " name="identityDocNumber" onChange={this.handleChange} />
                                        <span id="error-msg">{this.state.errors.identityDocNumber}</span>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block btn-register" onClick={this.handleBooking}> Confirm Booking </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
