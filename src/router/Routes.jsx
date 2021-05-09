import React from 'react'
import { Route, Switch } from 'react-router-dom';

import GetAllBusOperators from '../Components/admin/view_operators/GetAllBusOperators';
import Login from '.././Components/admin/admin_login/AdminLogin';
import Dashboard from '.././Components/admin/dashboard/Dashboard';
import GetRevenueByDate from '../Components/admin/revenue/GetRevenueByDate';
import HomePage from '../Components/HomePage';
import OperatorLogin from '../Components/operator/operator_login/OperatorLogin';
import OperatorRegister from '../Components/operator/operator_register/OperatorRegister';
import GetOperatorByUsername from '../Components/admin/view_operators/GetOperatorByUsername';
import GetRevenueByOperator from '../Components/admin/revenue/GetRevenueByOperator';
import GetRevenueByRoute from '../Components/admin/revenue/GetRevenueByRoute';


export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/admin-login" component={Login}></Route>
                <Route path="/admin/dashboard" component={Dashboard}></Route>
                <Route path="/admin/get-all-operators" component={GetAllBusOperators}></Route>
                <Route path="/admin/get-operator" component={GetOperatorByUsername}></Route>
                <Route path="/admin/daily-revenue" component={GetRevenueByDate}></Route>
                <Route path="/admin/operator-revenue" component={GetRevenueByOperator}></Route>
                <Route path="/admin/route-revenue" component={GetRevenueByRoute}></Route>

                <Route path="/operator-login" component={OperatorLogin}></Route>
                <Route path="/operator-register" component={OperatorRegister}></Route>


            </Switch>
        </div>
    )
}
