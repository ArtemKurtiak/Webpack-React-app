import React from 'react'
import './App.less'
import {connect, useDispatch, useSelector} from "react-redux";
import {getRepos} from "../store/actions";

const App = (props) => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.repos)
    return <div className='app' >
        <button onClick={() => {
            dispatch(getRepos())
        }}>Get Repos</button>
        {repos.map((el) => {
            return <div>{el.name}</div>
        })}
    </div>
}

const msp = (state) => {
    return {
        users: state.repos.repos
    }
}

export default App;