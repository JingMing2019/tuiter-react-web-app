import { createSlice } from "@reduxjs/toolkit";
import tuits from './data/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa-logo.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice(
    {
        name: 'tuits',
        initialState: tuits,
        reducers: {
            createTuit(state, action) {
                // add createTuit reducer function which appends the new tuit in the payload at the beginning of the
                // array of tuits contained in the state.
                state.unshift({
                    ...action.payload,
                    ...templateTuit,
                    _id: (new Date()).getTime(),
                })
            }
        }

    }
);

export const {createTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;