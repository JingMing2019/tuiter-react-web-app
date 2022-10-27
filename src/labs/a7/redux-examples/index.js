import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore(hello);

const ReduxExamples = () => {
    return(
        // Provider delivers data in store to child elements
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                {/* component consumes the data */}
                <HelloReduxExampleComponent />
            </div>
        </Provider>
    )
}

export default ReduxExamples;