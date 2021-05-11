import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from 'react-datepicker'
import HomeBg from "../../assets/HomeBg.png"
import moment from "moment";
import HomeNavbar from '../user/common/HomeNavbar';
import UserService from '../../services/UserService';

export default class BusListResult extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            markedDate: null,
            source: '',
            destination: '',
            buses: [],
            errors: {},
            busError: '',
        }

    };


    componentWillMount() {
        this.setState({ markedDate: moment(new Date()).format("YYYY-MM-DD") });
    }

    componentDidMount() {
        this.setState({
            source: this.props.history.location.state.routeDetails.source,
            destination: this.props.history.location.state.routeDetails.destination,
            markedDate: this.props.history.location.state.routeDetails.markedDate,
            startDate: this.props.history.location.state.routeDetails.date
        });

        UserService.getBusesByBusRoute(this.props.history.location.state.routeDetails.source, this.props.history.location.state.routeDetails.destination).then(res => {
            this.setState({ buses: res.data })
            if (res.data.length === 0) {
                this.setState({ busError: 'Buses For This Route Are Not Available !' })
            }
        })



    }

    handleChange(date) {
        this.setState({ startDate: date });
        this.setState({ markedDate: moment(date).format("YYYY-MM-DD") });
    }

    handleSearchChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    validateForm() {

        let fields = [];

        fields["source"] = this.state.source;
        fields["destination"] = this.state.destination;


        let errors = {};
        let formIsValid = true;

        if (!fields["source"]) {
            formIsValid = false;
            errors["source"] = "*Please enter your source.";
        }

        if (!fields["destination"]) {
            formIsValid = false;
            errors["destination"] = "*Please enter your destination.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }



    handleSubmit = (event) => {
        event.preventDefault();

        if (this.validateForm()) {
            UserService.getBusesByBusRoute(this.state.source, this.state.destination).then(res => {
                this.setState({ buses: res.data })
                if (res.data.length === 0) {
                    this.setState({ busError: 'Buses For This Route Are Not Available !' })
                }
            });
        }

    }


    handleBook = (bus) => {

        if (sessionStorage.getItem('isUserLoggedIn') === "false") {
            this.props.history.push('/user-login');

        }
        else {
            let bookingInfo = {
                source: this.state.source,
                destination: this.state.destination,
                fare: bus.fare,
                date: this.state.markedDate,
                startTime: bus.startTime,
                endTime: bus.endTime,
                busNumber: bus.busNumber,
            }
            this.props.history.push('/add-booking', { bookingInfo })
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
                <div className="row">
                    <div className="col vh-100 ">
                        {/* <div className="col-12 offset-2">
                            <img src={HomeBg} alt="HomeBgImage" />
                        </div> */}
                        <div className="container-fluid d-flex justify-content-center mt-4">
                            <div className="row">
                            </div>
                            <div className="row">
                                <form className="d-flex">
                                    <div className="col-3">
                                        <div className="form-outline">
                                            <input type="search" onChange={this.handleSearchChange} name="source" value={this.state.source} required id="form1" className="form-control" placeholder="Source" aria-label="Search" />
                                        </div>
                                        <span id="error-msg">{this.state.errors.source}</span>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-outline">
                                            <input type="search" onChange={this.handleSearchChange} name="destination" value={this.state.destination} required id="form1" className="form-control" placeholder="Destination" aria-label="Search" />
                                        </div>
                                        <span id="error-msg">{this.state.errors.destination}</span>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="d-flex">
                                                <DatePicker
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChange}
                                                    name="startDate"
                                                    dateFormat="yyyy/MM/dd"
                                                    minDate={new Date()}
                                                    className="form-control"
                                                />
                                                <FaRegCalendarAlt color={"#D9525E"} size={34} className="ml-1" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-outline">
                                            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block btn-register"> Search Buses </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col ">
                                    <h3 className="m-5 text-danger">{this.state.busError}</h3>
                                    {
                                        this.state.buses.map(bus => {
                                            return (
                                                <div key={bus.busNumber}>
                                                    <div className="card  mb-3" style={{ backgroundColor: '#E3E3E3' }}>
                                                        <div className="card-body d-flex justify-content-between ">
                                                            <div className="d-flex flex-column ">
                                                                <p>Bus Number</p>
                                                                <strong>{bus.busNumber}</strong>
                                                            </div>
                                                            <div className="d-flex flex-column align-items-center">
                                                                <p>Arrival</p>
                                                                <strong>{bus.startTime}</strong>
                                                            </div>
                                                            <div className="d-flex flex-column align-items-center">
                                                                <p>Departure</p>
                                                                <strong>{bus.endTime}</strong>
                                                            </div>
                                                            <div className="d-flex flex-column align-items-center ">
                                                                <p>Fare</p>
                                                                <strong>{bus.fare}</strong>
                                                            </div>
                                                            <div className="d-flex flex-column align-items-center ">
                                                                <p>Total Seats</p>
                                                                <strong>{bus.totalSeats}</strong>
                                                            </div>
                                                            <div className="d-flex flex-column align-items-center justify-content-center">
                                                                <button className="btn btn-primary btn-block" onClick={() => { this.handleBook(bus) }}>Book</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}
