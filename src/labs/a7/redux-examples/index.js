import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import Todos from "./todos-component";

// const store = configureStore(hello);
// All reducers must collate their collective states into a common store.
const store = configureStore({
    reducer: {hello, todos}
});

const ReduxExamples = () => {
    return(
        // Provider delivers data in store to child elements
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos />
                {/* component consumes the data */}
                <HelloReduxExampleComponent />
            </div>
        </Provider>
    )
}

export default ReduxExamples;