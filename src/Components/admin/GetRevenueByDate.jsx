import React, { Component } from 'react'
import Navbar from './dashboard/Navbar';
import Sidebar from './dashboard/Sidebar';
import DatePicker from 'react-datepicker';
import moment from "moment";
import AdminService from '../../services/AdminService';
export default class GetRevenueByDate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            markedDate: null,
            revenue: 1,
        }
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    componentWillMount() {
        this.setState({ markedDate: moment(new Date()).format("YYYY-MM-DD") });
    }

    componentDidMount() {

        console.log(this.state.markedDate);
        AdminService.getRevenueByDate(this.state.markedDate).then(res => {
            console.log(res);
        }).catch(err => console.log("error"))

    }

    handleChange(date) {
        // alert("changing" + this.state.markedDate);
        this.setState({
            startDate: date
        });
        this.setState({ markedDate: moment(date).format("YYYY-MM-DD") });

        AdminService.getRevenueByDate(moment(date).format("YYYY-MM-DD")).then(res => {
            console.log(res);
        }).catch(err => console.log("error"))


        // alert("changing" + this.state.markedDate);
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
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

                            <div className="row mt-2 ml-2">
                                <div className="col">
                                    <h2>Revenue</h2>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="offset-2 col">

                                    <form onSubmit={this.onFormSubmit}>
                                        <div className="form-group">
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                                name="startDate"
                                                dateFormat="yyyy/MM/dd"
                                            // minDate={new Date()}
                                            />
                                            <button className="btn btn-primary">Show Date</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
