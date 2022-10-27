// React useState hook can be used to deal with local component state
import React, {useState} from "react"
// React useDispatch hook send the new state to the reducer
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "./reducers/todos-reducer";

const Todos = () => {
    // Retrieve todos from reducer state and assign to local todos constant
    const todos = useSelector(state => state.todos)

    // create local state variable todo_, its value can be mutated using a function called setTodo
    const [todo, setTodo] = useState({do: ''})

    // get dispatcher to invoke reducer functions
    const dispatch = useDispatch()

    // handles the click event of button `Create`
    const createTodoClickHandler = () => {
        // call reducer function passing new todo_ as the payload in the action object
        // todo_ has been changed by keystroke changes in input field
        dispatch(addTodo(todo))
    }

    // handle keystroke changes in input field
    const todoChangeHandler = (event) =>
    {
        // get data from input field
        const doValue = event.target.value
        // create newTodo object instance
        const newTodo = {
            // setting the object do property
            do: doValue
        }
        // change local state variable by setTodo
        setTodo(newTodo)
    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler} className="btn btn-primary w-25 float-end">Create</button>
                    <input onChange={todoChangeHandler} value={todo.do} className="form-control w-75" />
                </li>
                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Todos;