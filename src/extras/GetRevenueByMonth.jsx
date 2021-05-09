import React, { Component } from 'react'

export default class GetRevenueByMonth extends Component {
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
                            <div className="row mt-2 ml-2">
                                <div className="col">
                                    <h2>Revenue</h2>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="offset-2 col">

                                    <h5>Select Date : </h5>
                                    <div className="form-group">
                                        <DatePicker
                                            selected={this.state.monthPicker}
                                            // onChange={this.handleChange}
                                            name="startDate"
                                            dateFormat="MM-yyyy"
                                            showMonthYearPicker
                                        // dateFormat="yyyy/MM/dd"
                                        // minDate={new Date()}
                                        />
                                    </div>
                                    {/* <button className="btn btn-primary" onClick={this.handleGetRevenue}>View Revenue</button> */}
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col offset-4 mt-4">
                                    <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
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
            </div >
        )
    }
}
