
import './App.css';


import GetAllBusOperators from './Components/admin/GetAllBusOperators';
import Login from './Components/admin/AdminLogin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddBusOperator from './Components/admin/AddBusOperator';
import Dashboard from './Components/admin/dashboard/Dashboard';
import Header from './Components/admin/dashboard/Sidebar';
import AdminLogin from './Components/common/AdminLogin';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/login" component={Login}></Route>
          {/* <Route path="/" exact component={Login1}></Route> */}
          {/* <Route path="/admin-login" component={AdminLogin}></Route> */}
          <Route path="/dashboard" component={Dashboard}></Route>
          {/* <Route path="/GetAllBusOperators" component={GetAllBusOperators}></Route> */}
          <Route path="/admin/get-all-operators" component={GetAllBusOperators}></Route>
          {/* <Route path="/AddBusOperator" component={AddBusOperator}></Route> */}
          {/* <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route> */}
          {/* <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route> */}
          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
        </Switch>






      </Router>

    </div>
  );
}

export default App;
