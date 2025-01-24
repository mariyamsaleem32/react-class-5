import React from 'react';
import { GlobalContext } from '../context/context';
import { useContext } from "react";

const Home = () => {
let { state, dispatch } = useContext(GlobalContext);
    return (
        <div>
            <h1>I am Home page</h1>
            <h1>{state.myNum}</h1>
            <button onClick={()=>{dispatch({type:"ADD"})}}>increament</button>
        </div>
    );
}

export default Home;
