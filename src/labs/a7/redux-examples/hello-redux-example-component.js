import React from "react"
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    // const message = useSelector((hello) => hello.message) // extract 'Hello World' from reducer
    // now hello is bounded with todos. The state of each reducer is now accessible through these properties
    const message = useSelector((state) => state.hello.message);
    return(
        <h1>{message}</h1>
    )
}

export default HelloReduxExampleComponent;