import './index.less';
import ReactDOM from 'react-dom';
import React from 'react'
import App from "./components/App";
import {Provider} from "react-redux";
import store from './store/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>, document.getElementById('root')
)