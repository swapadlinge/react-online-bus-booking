import React, { Component } from 'react'
import AdminService from '../../services/AdminService';

export default class AddBusOperator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            operatorUsername: '',
            password: '',
            result: [],
        }

        this.addOperator = this.addOperator.bind(this);
        this.changeOperatorUsernameHandler = this.changeOperatorUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    addOperator = (e) => {
        e.preventDefault();
        //console.log(this.state)
        //alert("Adding"); 

        let operator = {
            busOperatorUsername: this.state.operatorUsername,
            password: this.state.password
        };

        console.log('operator => ' + JSON.stringify(operator));

        AdminService.addBusOperator(operator).then(res => {
            console.log(res);
            this.setState({ result: res.data });
            // this.props.history.push("/GetAllBusOperators");
        })
            .catch(error => {

                console.log("Unable to create User ")
                this.setState({ result: "Unable to create User " })
            }
            )


    }


    changeOperatorUsernameHandler = (event) => {
        this.setState({ operatorUsername: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }



    render() {
        return (
            <div className="AddBusOperator">

                <div className="container">
                    <div className="row">
                        <button className="btn btn-info" onClick={() => { this.props.history.push("/GetAllBusOperators") }} >View All Bus Operators</button>
                    </div>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 mt-4">
                            <h3>Add bus Operator</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Operator Username: </label>
                                        <input placeholder="username" name="operator_username" className="form-control"
                                            value={this.state.operatorUsername} onChange={this.changeOperatorUsernameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Password: </label>
                                        <input type="password" placeholder="Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    {/* <div className="form-group">
                                        <label> Salary: </label>
                                        <input placeholder="Salary" name="salary" className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Department: </label>
                                        <input placeholder="Department" name="department" className="form-control"
                                        />
                                    </div> */}

                                    <button className="btn btn-success" onClick={this.addOperator} >Save</button>
                                    <button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button>
                                    <div className="result txt-success">{this.state.result}</div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
