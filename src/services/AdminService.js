
import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/";

class AdminService {

    ///signIn/{username}/{password}
    adminSignIn(username, password) {
        return axios.get(`${ADMIN_API_BASE_URL}/signIn/${username}/${password}`);
    }


    getAllBusOperators() {
        // console.log(axios.get(ADMIN_API_BASE_URL + 'getAllBusOperators'))
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