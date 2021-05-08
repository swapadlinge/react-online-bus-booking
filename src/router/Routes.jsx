import React from 'react'
import { Route, Switch } from 'react-router-dom';

import GetAllBusOperators from '.././Components/admin/GetAllBusOperators';
import Login from '.././Components/admin/AdminLogin';
import Dashboard from '.././Components/admin/dashboard/Dashboard';
import GetRevenueByDate from '.././Components/admin/GetRevenueByDate';


export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/admin/get-all-operators" component={GetAllBusOperators}></Route>
                <Route path="/admin/daily-revenue" component={GetRevenueByDate}></Route>
            </Switch>
        </div>
    )
}
