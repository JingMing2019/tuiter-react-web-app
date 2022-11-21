// axios library programmatically sends and receives HTTP requests.
import axios from 'axios';

// // Remote API: location of HTTP services from remote server on Heroku
// const TUITS_API = 'https://tuiter-node-server-app-jing.herokuapp.com/api/tuits';

// // Local API: location of HTTP services, test on local
// const TUITS_API = 'http://localhost:4000/api/tuits';

// Auto switch API: Locally REACT_APP_API_BASE can be set to http://localhost:4000/api, but when the application runs remotely it can
// instead be set to https://tuiter-node-server-app-jing.herokuapp.com/api.
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

// Declare four common CRUD operations.
// The functions are all implemented as asynchronous functions that will not block the browser's sole JavaScript thread.
// They will rely on the browser's multithreaded capabilities to send HTTP requests asynchronous and notify our
// functions when responses eventually resolve
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit);
    return response.data;
}

// async tags this function as asynchronous
export const findTuits  = async () => {
    // sends an HTTP GET request to TUITS_API using the axios.get() function.
    const response = await axios.get(TUITS_API);
    // The data in the response is the tuits array sent back from
    // `findTuits` in /tuiter-node-server-app/controllers/tuits/tuits-controller.js
    // and it's embedded in the response's data property.
    return response.data;
}

export const deleteTuit = async (tid) => {
    // append tuit's ID to URL
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}