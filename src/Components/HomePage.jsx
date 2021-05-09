import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap';
import { MdPersonOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import HomeNavbar from './user/common/HomeNavbar';
export default class HomePage extends Component {
    render() {
        return (
            <div className="container justify-content-around remove-all-margin">

                <div className="row">
                    <div className="col ">
                         <HomeNavbar/>
                    </div>

                </div>

                <div className="row ">
                    <div className="col vh-100">

                        <h2>Home</h2>
                    </div>
                </div>
            </div>
        )
    }
}
