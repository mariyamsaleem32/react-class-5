import React from 'react';
import { GlobalContext } from '../context/context';
import { useContext } from "react";

const About = () => {
    let { state, dispatch } = useContext(GlobalContext);
    return (
        <div>
            <h1>I am About page</h1>
            <h1>{state.myNum}</h1>
            <button onClick={()=>{dispatch({type:"SUB"})}}>dicrement</button>
        </div>
    );
}

export default About;
