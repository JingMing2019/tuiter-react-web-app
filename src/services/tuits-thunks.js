// The Redux createAsyncThunk function can wrap an asynchronous HTTP function so that it can interact with a Redux
// reducer to store data from a remote server into a local redux store.
import {createAsyncThunk} from "@reduxjs/toolkit";

// import all exported functions as service
import * as service from './tuits-service';

// create thunk for findTuits
// give unique name, thunk invokes service function. Returned data goes in redux action's payload
export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () => await service.findTuits()
)

export const deleteTuitsThunk = createAsyncThunk(
    'tuits/deleteTuit', async (tuitId) => {
        await service.deleteTuit(tuitId);
        // return tuit ID so we can remove tuit
        return tuitId;
    }
)

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (newTuit) => await service.createTuit(newTuit)
)

export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit', async (tuit) => await service.updateTuit(tuit)
)