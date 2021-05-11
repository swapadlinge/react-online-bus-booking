
import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/";

class AdminService {

    ///signIn/{username}/{password}
    adminSignIn(username, password) {
        return axios.get(`${ADMIN_API_BASE_URL}signIn/${username}/${password}`);
    }

    // /getRevenueByBusOperator/{operator}
    getRevenueByBusOperator(operator) {
        return axios.get(`${ADMIN_API_BASE_URL}getRevenueByBusOperator/${operator}`);
    }

    ///getRevenueByBusRoute/{routeName}
    getRevenueByBusRoute(routeName) {
        return axios.get(`${ADMIN_API_BASE_URL}getRevenueByBusRoute/${routeName}`)
    }

    ///viewAllBusRoute
    getAllBusRoute() {
        return axios.get(`${ADMIN_API_BASE_URL}viewAllBusRoute`)
    }

    getOperatorCount() {
        return axios.get(`${ADMIN_API_BASE_URL}getOperatorCount`);
    }

    getUserCount() {
        return axios.get(`${ADMIN_API_BASE_URL}getUserCount`);
    }

    getBusCount() {
        return axios.get(`${ADMIN_API_BASE_URL}getBusCount`);
    }


    getAllBusOperators() {
        return axios.get(ADMIN_API_BASE_URL + 'getAllBusOperators');
    }

    ///getRevenueByDate/{ date }
    getRevenueByDate(date) {
        return axios.get(ADMIN_API_BASE_URL + 'getRevenueByDate/' + date);
    }

    addBusOperator(operator) {
        return axios.post(ADMIN_API_BASE_URL + 'addBusOperator', operator);
    }
    // deleteBusOperator/{operatorUsername}
    deleteBusOperator(operatorUsername) {
        return axios.delete(ADMIN_API_BASE_URL + "deleteBusOperator/" + operatorUsername);
    }

}
export default new AdminService()