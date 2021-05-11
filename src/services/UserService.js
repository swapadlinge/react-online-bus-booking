
import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/";

class UserService {

    // /user/signIn/username/password
    userSignIn(username, password) {
        return axios.get(`${USER_API_BASE_URL}user/signIn/${username}/${password}`);
    }

    // /addBooking
    addBooking(bookingObj) {
        return axios.post(`${USER_API_BASE_URL}addBooking`, bookingObj);
    }

    ///getBusesByBusRoute/{source}/{destination}
    getBusesByBusRoute(source, destination) {
        return axios.get(`${USER_API_BASE_URL}getBusesByBusRoute/${source}/${destination}`)
    }


}
export default new UserService()