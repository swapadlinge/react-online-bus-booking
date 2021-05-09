import React, { Component } from 'react'
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import DatePicker from 'react-datepicker';
import moment from "moment";
import AdminService from '../../../services/AdminService';
import "../common/common.css";
import { FaRegCalendarAlt } from "react-icons/fa";
export default class GetRevenueByDate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            markedDate: null,
            revenue: false,
            monthPicker: new Date(),
        }
        this.handleChange = this.handleChange.bind(this);

    };

    componentWillMount() {
        this.setState({ markedDate: moment(new Date()).format("YYYY-MM-DD") });
    }

    componentDidMount() {

        if (sessionStorage.getItem('isLoggedIn') === 'false') {
            this.props.history.push("/admin-login");
        }

        console.log(this.state.markedDate);
        AdminService.getRevenueByDate(this.state.markedDate).then(res => {
            this.setState({ revenue: res.data })
        }).catch(err => console.log("error"))

    }

    handleChange(date) {
        this.setState({
            startDate: date
        });

        this.setState({ markedDate: moment(date).format("YYYY-MM-DD") });
        AdminService.getRevenueByDate(moment(date).format("YYYY-MM-DD")).then(res => {
            this.setState({ revenue: res.data })

        }).catch(err => console.log("error"))


    }

    handleGetRevenue = (e) => {
        // e.preventDefault();

        AdminService.getRevenueByDate(this.state.markedDate).then(res => {
            this.setState({ revenue: res.data })
        }).catch(err => console.log("error"))
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
                            <div className="row mt-2 ">
                                <div className="col">
                                    <h2>Revenue</h2>
                                </div>
                            </div>
                            <div className="row vh-100">
                                <div className="col d-flex ">
                                    <div className="mt-2 offset-3">
                                        <h5>Select Date : </h5>
                                        <div className="form-group">
                                            <label className="d-flex">
                                                <DatePicker
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChange}
                                                    name="startDate"
                                                    dateFormat="yyyy/MM/dd"
                                                    // minDate={new Date()}
                                                    className="bi bi-alarm"
                                                />
                                                <FaRegCalendarAlt size={26} />


                                            </label>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
                                                    <div className="card-header">Revenue for Date : {this.state.markedDate}</div>
                                                    <div className="card-body d-flex flex-column align-items-center p-3">
                                                        <h5 className="card-title">Revenue</h5>
                                                        <h5 className="card-title">Rs.</h5>
                                                        <p className="card-text" style={{ fontSize: '2rem' }}>{this.state.revenue}</p>
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
            </div >
        )
    }
}
