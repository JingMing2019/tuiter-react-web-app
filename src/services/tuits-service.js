// axios library programmatically sends and receives HTTP requests.
import axios from 'axios';
// location of HTTP services
const TUITS_API = 'http://localhost:4000/api/tuits';

// Declare four common CRUD operations.
// The functions are all implemented as asynchronous functions that will not block the browser's sole JavaScript thread.
// They will rely on the browser's multithreaded capabilities to send HTTP requests asynchronous and notify our
// functions when responses eventually resolve
export const createTuit = async (tuit) => {}
export const findTuits  = async ()     => {}
export const deleteTuit = async (tuit) => {}
export const updateTuit = async (tuit) => {}