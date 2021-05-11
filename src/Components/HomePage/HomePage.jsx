import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap';
import { MdPersonOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from 'react-datepicker'
import HomeBg from "../../assets/HomeBg.png"
import moment from "moment";
// import HomeNavbar from '../user/common/HomeNavbar';
import HomeNavbar from '../user/common/HomeNavbar';
export default class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            markedDate: null,
            source: '',
            destination: '',
            errors: {},
        }
        this.handleChange = this.handleChange.bind(this);

    };

    componentWillMount() {
        this.setState({ markedDate: moment(new Date()).format("YYYY-MM-DD") });
    }

    componentDidMount() {
        if (sessionStorage.getItem("isUserLoggedIn") === null) {
            sessionStorage.setItem('userUsername', '');
            sessionStorage.setItem('isUserLoggedIn', false);
        }
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





    handleChange(date) {
        this.setState({ startDate: date });
        this.setState({ markedDate: moment(date).format("YYYY-MM-DD") });
    }

    handleSearchChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            let routeDetails = { source: this.state.source, destination: this.state.destination, markedDate: this.state.markedDate, date: this.state.startDate };
            this.props.history.push("/buses", { routeDetails });

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
                        <div className="col-12 offset-2">
                            <img src={HomeBg} alt="HomeBgImage" />
                        </div>
                        <div className="container-fluid d-flex justify-content-center mt-4">
                            <div className="row">

                            </div>
                            <div className="row">
                                <form className="d-flex">


                                    <div className="col-3">
                                        <div className="form-outline">
                                            <input type="search" onChange={this.handleSearchChange} name="source" required id="form1" className="form-control" placeholder="Source" aria-label="Search" />
                                        </div>
                                        <span id="error-msg">{this.state.errors.source}</span>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-outline">
                                            <input type="search" onChange={this.handleSearchChange} name="destination" required id="form1" className="form-control" placeholder="Destination" aria-label="Search" />
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
                    </div>
                </div>


            </div>
        )
    }
}
