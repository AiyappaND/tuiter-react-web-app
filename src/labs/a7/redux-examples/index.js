import React from "react";
import HelloReduxExampleComponent
    from "./hello-redux-example-component";
import hello from "./reducers/hello";
import { configureStore }
    from '@reduxjs/toolkit';
import Todos from "./todos-component";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
const store = configureStore({
    reducer: {hello, todos}
});


const ReduxExamples = () => {
    return(
        // Provider delivers data in store to child elements
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                {/*component consumes the data*/}
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;
