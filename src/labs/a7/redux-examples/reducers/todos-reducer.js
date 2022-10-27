// Redux example: more complicated data
import {createSlice} from "@reduxjs/toolkit";

// initial set of todos objects
const initialTodos = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,

    // define reducer functions as a map
    reducers: {
        // reducer function addTodo receive current state and mutate current state into new state
        addTodo(state, action) {
            state.push({
                // _id set to current date
                _id: (new Date()).getTime(),
                // do set to "do" object sent through action obj commonly referred to as the "payload"
                do: action.payload.do,
                done: false
            })
        }
    }
});

// export actions so we can call them from UI
export const {addTodo} = todosSlice.actions

export default todosSlice.reducer